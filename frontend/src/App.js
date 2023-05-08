import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Symptoms from './components/Symptoms';
import Search from './components/Search';
import Sort from './components/Sort';

let listOfSymptoms = [["அரிப்பு", "itching", "body"],
    ["தோல் வெடிப்பு", "skin_rash", "body"],
    ["முனை தோல் வெடிப்புகள்", "nodal_skin_eruptions", "body"],
    ["தொடர்ச்சியான தும்மல்", "continuous_sneezing", "head"],
    ["நடுக்கம்", "shivering", "body"],
    ["குளிர்கிறது", "chills", "body"],
    ["மூட்டு வலி", "joint_pain", "body"],
    ["வயிற்று வலி", "stomach_pain", "stomach"],
    ["அமிலத்தன்மை", "acidity", "stomach"],
    ["நாக்கில் புண்கள்", "ulcers_on_tongue", "head"],
    ["தசை சுருக்கம்", "muscle_wasting", "body"],
    ["வாந்தி", "vomiting", "stomach"],
    ["எரியும் கசிவு", "burning_micturition", "excretion"],
    ["சிறுநீர் கழித்தல்", "spotting_urination", "excretion"],
    ["சோர்வு", "fatigue", "body"],
    ["எடை அதிகரிப்பு", "weight_gain", "body"],
    ["கவலை", "anxiety", "head"],
    ["குளிர்ந்த கைகள் மற்றும் கால்கள்", "cold_hands_and_feets", "limbs"],
    ["மனம் அலைபாயிகிறது", "mood_swings", "head"],
    ["எடை இழப்பு", "weight_loss", "body"],
    ["ஓய்வின்மை", "restlessness", "head"],
    ["சோம்பல்", "lethargy", "head"],
    ["தொண்டையில் திட்டுகள்", "patches_in_throat", "head"],
    ["ஒழுங்கற்ற சர்க்கரை அளவு", "irregular_sugar_level", "body"],
    ["இருமல்", "cough", "chest"],
    ["அதிக காய்ச்சல்", "high_fever", "body"],
    ["குழி விழுந்த கண்கள்", "sunken_eyes", "head"],
    ["மூச்சுத்திணறல்", "breathlessness", "chest"],
    ["வியர்வை", "sweating", "body"],
    ["நீரிழப்பு", "dehydration", "body"],
    ["அஜீரணம்", "indigestion", "stomach"],
    ["தலைவலி", "headache", "head"],
    ["மஞ்சள் நிற தோல்", "yellowish_skin", "body"],
    ["இருண்ட சிறுநீர்", "dark_urine", "excretion"],
    ["குமட்டல்", "nausea", "head"],
    ["பசியிழப்பு", "loss_of_appetite", "stomach"],
    ["கண்களுக்கு பின்னால் வலி", "pain_behind_the_eyes", "head"],
    ["முதுகு வலி", "back_pain", "body"],
    ["மலச்சிக்கல்", "constipation", "stomach"],
    ["வயிற்று வலி", "abdominal_pain","stomach"],
    ["வயிற்றுப்போக்கு", "diarrhoea", "stomach"],
    ["லேசான காய்ச்சல்", "mild_fever", "body"],
    ["மஞ்சள் சிறுநீர்", "yellow_urine",  "excretion"],
    ["கண்கள் மஞ்சள்", "yellowing_of_eyes", "head"], 
    ["கடுமையான கல்லீரல் செயலிழப்பு", "acute_liver_failure", "stomach"], 
    ["திரவ சுமை", "fluid_overload", "chest"], 
    ["வயிறு வீக்கம்", "swelling_of_stomach","stomach"],
    ["வீங்கிய நிணநீர் கணுக்கள்", "swelled_lymph_nodes", "body"],
    ["உடல்நலக்குறைவு", "malaise", "body"],
    ["மங்கலான மற்றும் சிதைந்த பார்வை", "blurred_and_distorted_vision", "head"], 
    ["சளி", "phlegm", "chest"],
    ["தொண்டை எரிச்சல்", "throat_irritation","chest"],
    ["கண்கள் சிவத்தல்", "redness_of_eyes", "head"], 
    ["சைனஸ் அழுத்தம்", "sinus_pressure", "head"],
    ["மூக்கு ஒழுகுதல்", "runny_nose", "head"],
    ["நெரிசல்", "congestion", "chest"], 
    ["நெஞ்சு வலி", "chest_pain", "chest"], 
    ["கைகால்களில் பலவீனம்", "weakness_in_limbs", "chest"], 
    ["வேகமான இதய துடிப்பு", "fast_heart_rate", "chest"], 
    ["குடல் இயக்கங்களின் போது வலி", "pain_during_bowel_movements", "excretion"],
    ["குத பகுதியில் வலி", "pain_in_anal_region", "excretion"],
    ["இரத்தம் தோய்ந்த மலம்", "bloody_stool", "excretion"],
    ["ஆசனவாயில் எரிச்சல்", "irritation_in_anus", "excretion"],
    ["கழுத்து வலி", "neck_pain",  "head"],
    ["dizziness", "dizziness", "head"],
    ["பிடிப்புகள்", "cramps", "body"],
    ["bruising", "bruising", "body"],
    ["உடல் பருமன்", "obesity", "body"],
    ["வீங்கிய கால்கள்", "swollen_legs", "limbs"],
    ["வீங்கிய இரத்த நாளங்கள்", "swollen_blood_vessels", "body"],
    ["வீங்கிய முகம் மற்றும் கண்கள்", "puffy_face_and_eyes", "head"],
    ["விரிவாக்கப்பட்ட தைராய்டு", "enlarged_thyroid", "head"],
    ["உடையக்கூடிய நகங்கள்", "brittle_nails", "limbs"],
    ["வீங்கிய முனைகள்", "swollen_extremeties", "body"],
    ["அதிகப்படியான பசி", "excessive_hunger", "stomach"],
    ["கூடுதல் திருமண தொடர்புகள்", "extra_marital_contacts", "excretion"],
    ["உதடுகள் உலர்தல் மற்றும் கூச்சம்", "drying_and_tingling_lips", "head"],
    ["தெளிவற்ற பேச்சு", "slurred_speech", "head"],
    ["மூட்டு வலி", "knee_pain", "limbs"],
    ["இடுப்பு மூட்டு வலி", "hip_joint_pain", "limbs"],
    ["தசை பலவீனம்", "muscle_weakness", "body"],
    ["பிடிப்பான கழுத்து", "stiff_neck", "head"],
    ["வீக்கம் மூட்டுகள்", "swelling_joints", "limbs"],
    ["இயக்கம் விறைப்பு", "movement_stiffness", "limbs"],
    ["சுழலும் இயக்கங்கள்", "spinning_movements", "head"],
    ["சமநிலை இழப்பு", "loss_of_balance", "head"],
    ["நிலையற்ற தன்மை", "unsteadiness", "head"],
    ["ஒரு உடல் பக்கத்தின் பலவீனம்", "weakness_of_one_body_side", "body"],
    ["வாசனை இழப்பு", "loss_of_smell", "head"],
    ["சிறுநீர்ப்பை அசௌகரியம்", "bladder_discomfort", "excretion"], 
    ["சிறுநீரின் துர்நாற்றம்", "foul_smell_of_urine", "excretion"], 
    ["சிறுநீரின் தொடர்ச்சியான உணர்வு", "continuous_feel_of_urine", "excretion"], 
    ["வாயுக்களின் பாதை", "passage_of_gases", "excretion"], 
    ["உள் அரிப்பு", "internal_itching", "body"],
    ["நச்சுத் தோற்றம் (டைபஸ்)", "toxic_look_(typhos)",  "head"],
    ["மனச்சோர்வு", "depression", "head"],
    ["எரிச்சல்", "irritability", "head"],
    ["தசை வலி", "muscle_pain", "body"],
    ["மாற்றப்பட்ட உணர்திறன்", "altered_sensorium", "head"],
    ["உடலில் சிவப்பு புள்ளிகள்", "red_spots_over_body", "body"],
    ["வயிற்று வலி", "belly_pain",  "stomach"],
    ["அசாதாரண மாதவிடாய்", "abnormal_menstruation", "stomach"],
    ["டிஸ்க்ரோமிக் திட்டுகள்", "dischromic_patches", "body"],
    ["கண்களில் இருந்து நீர்", "watering_from_eyes", "head"],
    ["அதிகரித்த பசி", "increased_appetite", "stomach"],
    ["பாலியூரியா", "polyuria", "body"],
    ["குடும்ப வரலாறு", "family_history", "body"],
    ["சளி சளி", "mucoid_sputum", "body"],
    ["துருப்பிடித்த சளி", "rusty_sputum", "body"],
    ["செறிவு இல்லாமை", "lack_of_concentration", "head"],
    ["காட்சி தொந்தரவுகள்", "visual_disturbances", "head"],
    ["இரத்தமாற்றம் பெறுதல்", "receiving_blood_transfusion", "body"],
    ["மலட்டுத்தன்மையற்ற ஊசிகளைப் பெறுதல்", "receiving_unsterile_injections", "body"],
    ["கோமா", "coma", "head"],
    ["வயிற்று இரத்தப்போக்கு", "stomach_bleeding", "stomach"],
    ["வயிறு விரிவடைதல்", "distention_of_abdomen", "stomach"],
    ["மது அருந்துதல் வரலாறு", "history_of_alcohol_consumption", "head"],
    ["திரவ சுமை", "fluid_overload", "body"],
    ["சளியில் இரத்தம்", "blood_in_sputum", "body"],
    ["கன்று மீது முக்கிய நரம்புகள்", "prominent_veins_on_calf", "limbs"],
    ["படபடப்பு", "palpitations", "head"],
    ["வலிமிகுந்த நடைபயிற்சி", "painful_walking", "limbs"],
    ["சீழ் நிறைந்த பருக்கள்", "pus_filled_pimples", "body"],
    ["கரும்புள்ளிகள்", "blackheads", "head"],
    ["துடிக்கிறது", "scurring", "body"],
    ["தோல் உரித்தல்", "skin_peeling", "body"],
    ["தூசி போன்ற வெள்ளி", "silver_like_dusting","body"],
    ["நகங்களில் சிறிய பற்கள்", "small_dents_in_nails", "limbs"],
    ["அழற்சி நகங்கள்", "inflammatory_nails", "limbs"],
    ["கொப்புளம்", "blister", "body"],
    ["மூக்கைச் சுற்றி சிவப்பு புண்கள்", "red_sore_around_nose", "head"],
    ["மஞ்சள் மேலோடு கசிவு", "yellow_crust_ooze", "body"]]

function App() {
  const [language, setLanguage] = useState("Eng")

  let arr = []
  for (let i=0; i<listOfSymptoms.length; i++) {
      let newSymptom = {
          id: listOfSymptoms[i][1],
          name: pretty(listOfSymptoms[i][1]),
          tamil: listOfSymptoms[i][0],
          category: listOfSymptoms[i][2],
          isSelected: false
      }
      arr.push(newSymptom)
  }

  function pretty(symptom){
    symptom = symptom.split("_")
    for (var i=0; i<symptom.length; i++) {
        symptom[i] = symptom[i].charAt(0).toUpperCase() + symptom[i].slice(1)
    }
    return symptom.join(" ")
  }

  const [symptoms, updateSymptoms] = useState(arr)
  const [disease, setDisease] = useState("")
  const [doctor, setDoctor] = useState("")
  const [searchString, setSearchString] = useState("")
  const [groupByCategory, setGroupByCategory] = useState("")

  function shouldDiagnose() {

    let symptomsSelected = symptoms.filter(symptom => symptom.isSelected===true)
    let selectedIds = []
    for(let i=0; i<symptomsSelected.length; i++) {
      selectedIds.push(symptomsSelected[i].id)
    }
    
    let jsonParam = {symptom: selectedIds.join(",")}
    
    axios.post("http://localhost:5000/", jsonParam)
    .then(res => {

    }).catch(err => {

    })
    console.log(jsonParam)

    setDisease("aids")
    setDoctor("derma")
  }

  return (
    <div className="App" style={{height:"100vh", width:"100vw", display:"flex", justifyContent: "center", alignItems:"center"}}>
      <div style={{display:"flex"}}>
        <div>
          <Navbar setLanguage={setLanguage}/>
          <Banner symptoms={symptoms} updateSymptoms={updateSymptoms} disease={disease} doctor={doctor} shouldDiagnose={shouldDiagnose} language={language}/>
          <Search searchString={searchString} setSearchString={setSearchString}/>
          <Symptoms symptoms={symptoms} updateSymptoms={updateSymptoms} searchString={searchString} groupByCategory={groupByCategory} language={language}/>
        </div>
        <div>
          <Sort groupByCategory={groupByCategory} setGroupByCategory={setGroupByCategory}/>
        </div>
      </div>
    </div>
  );
}

export default App;
