import pandas
from scipy.stats import mode

from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC



from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
 






import matplotlib.pyplot as plt

def aa(inpu):
    df = pandas.read_csv("updataset.csv")

    dic={'Fungal infection': 0,'Allergy': 1,'GERD': 2,'Chronic cholestasis': 3,'Drug Reaction': 4,'Peptic ulcer diseae': 5,'AIDS': 6,'Diabetes ': 7,'Gastroenteritis': 8,'Bronchial Asthma': 9,'Hypertension ': 10,'Migraine': 11,'Cervical spondylosis': 12,'Paralysis (brain hemorrhage)': 13,'Jaundice': 14,'Malaria': 15,'Chicken pox': 16,'Dengue': 17,'Typhoid': 18,'hepatitis A': 19,'Hepatitis B': 20,'Hepatitis C': 21,'Hepatitis D': 22,'Hepatitis E': 23,'Alcoholic hepatitis': 24,'Tuberculosis': 25,'Common Cold': 26,'Pneumonia': 27,'Dimorphic hemmorhoids(piles)': 28,'Heart attack': 29,'Varicose veins': 30,'Hypothyroidism': 31,'Hyperthyroidism': 32,'Hypoglycemia': 33,'Osteoarthristis': 34,'Arthritis': 35,'(vertigo) Paroymsal  Positional Vertigo': 36,'Acne': 37,'Urinary tract infection': 38,'Psoriasis': 39,'Impetigo': 40}
    q=df.columns.tolist()
    q.remove('Disease')
    X=df[q]
    sss=df['Disease']
    df['Disease'] = df['Disease'].map(dic)
    #all the symptons
    X = df[q]
    y = df['Disease']
#    tree.plot_tree(dtree, feature_names=q)


    #a=int(input("Number of symptoms in the array:-"))
    n=inpu
    print(n)
    #skin_peeling,silver_like_dusting,small_dents_in_nails,inflammatory_nails
    #Hepatitis C,
    #fatigue,yellowish_skin,nausea,loss_of_appetite,yellowing_of_eyes,family_history

    input_array=[]
    count=0
    for r in range(len(q)):
        if q[r] in n:
            count=count+1
            input_array.append(1)
        else:
            input_array.append(0)
    #dtreee

    final_dtree_model = DecisionTreeClassifier()
    final_svm_model = SVC()
    final_nb_model = GaussianNB()
    final_rf_model = RandomForestClassifier(random_state=18)

    final_svm_model.fit(X, y)
    final_nb_model.fit(X, y)
    final_rf_model.fit(X, y)
    final_dtree_model.fit(X,y)



    dtree_out=final_dtree_model.predict([input_array])
    nb_out=final_nb_model.predict([input_array])
    rf_out=final_rf_model.predict([input_array])
    svm_out=final_svm_model.predict([input_array])

    
    sout="dtree_out : ", list(dic.keys())[list(dic.values()).index(dtree_out[0])]
    sout2="GaussianNB_out : ", list(dic.keys())[list(dic.values()).index(nb_out[0])]

    sout3="RandomForest_out : ", list(dic.keys())[list(dic.values()).index(rf_out[0])]

    sout4="svm_out : ", list(dic.keys())[list(dic.values()).index(svm_out[0])]
    final_prediction = mode([dtree_out, rf_out,nb_out,svm_out])[0][0]
    finalout=str(list(dic.keys())[list(dic.values()).index(final_prediction[0])])
    df2 = pandas.read_csv("special.csv")
    indexes = df2.index
    special=''
    for index in indexes:     
        if(df2['Disease'][index]==finalout):
            special=df2['Specialists'][index]
    srr=[finalout,special]
    return srr