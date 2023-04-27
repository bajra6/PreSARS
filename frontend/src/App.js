import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Symptoms from './components/Symptoms';
import Search from './components/Search';
import Sort from './components/Sort';

let listOfSymptoms = [["itching", "body"],
    ["skin_rash", "body"],
    ["nodal_skin_eruptions", "body"],
    ["continuous_sneezing", "head"],
    ["shivering", "body"],
    ["chills", "body"],
    ["joint_pain", "body"],
    ["stomach_pain", "stomach"],
    ["acidity", "stomach"],
    ["ulcers_on_tongue", "head"],
    ["muscle_wasting", "body"],
    ["vomiting", "stomach"],
    ["burning_micturition", "excretion"],
    ["spotting_urination", "excretion"],
    ["fatigue", "body"],
    ["weight_gain", "body"],
    ["anxiety", "head"],
    ["cold_hands_and_feets", "limbs"],
    ["mood_swings", "head"],
    ["weight_loss", "body"],
    ["restlessness", "head"],
    ["lethargy", "head"],
    ["patches_in_throat", "head"],
    ["irregular_sugar_level", "body"],
    ["cough", "chest"],
    ["high_fever", "body"],
    ["sunken_eyes", "head"],
    ["breathlessness", "chest"],
    ["sweating", "body"],
    ["dehydration", "body"],
    ["indigestion", "stomach"],
    ["headache", "head"],
    ["yellowish_skin", "body"],
    ["dark_urine", "excretion"],
    ["nausea", "head"],
    ["loss_of_appetite", "stomach"],
    ["pain_behind_the_eyes", "head"],
    ["back_pain", "body"],
    ["constipation", "stomach"],
    ["abdominal_pain","stomach"],
    ["diarrhoea", "stomach"],
    ["mild_fever", "body"],
    ["yellow_urine",  "excretion"],
    ["yellowing_of_eyes", "head"], 
    ["acute_liver_failure", "stomach"], 
    ["fluid_overload", "chest"], 
    ["swelling_of_stomach","stomach"],
    ["swelled_lymph_nodes", "body"],
    ["malaise", "body"],
    ["blurred_and_distorted_vision", "head"], 
    ["phlegm", "chest"],
    ["throat_irritation","chest"],
    ["redness_of_eyes", "head"], 
    ["sinus_pressure", "head"],
    ["runny_nose", "head"],
    ["congestion", "chest"], 
    ["chest_pain", "chest"], 
    ["weakness_in_limbs", "chest"], 
    ["fast_heart_rate", "chest"], 
    ["pain_during_bowel_movements", "excretion"],
    ["pain_in_anal_region", "excretion"],
    ["bloody_stool", "excretion"],
    ["irritation_in_anus", "excretion"],
    ["neck_pain",  "head"],
    ["dizziness", "head"],
    ["cramps", "body"],
    ["bruising", "body"],
    ["obesity", "body"],
    ["swollen_legs", "limbs"],
    ["swollen_blood_vessels", "body"],
    ["puffy_face_and_eyes", "head"],
    ["enlarged_thyroid", "head"],
    ["brittle_nails", "limbs"],
    ["swollen_extremeties", "body"],
    ["excessive_hunger", "stomach"],
    ["extra_marital_contacts", "excretion"],
    ["drying_and_tingling_lips", "head"],
    ["slurred_speech", "head"],
    ["knee_pain", "limbs"],
    ["hip_joint_pain", "limbs"],
    ["muscle_weakness", "body"],
    ["stiff_neck", "head"],
    ["swelling_joints", "limbs"],
    ["movement_stiffness", "limbs"],
    ["spinning_movements", "head"],
    ["loss_of_balance", "head"],
    ["unsteadiness", "head"],
    ["weakness_of_one_body_side", "body"],
    ["loss_of_smell", "head"],
    ["bladder_discomfort", "excretion"], 
    ["foul_smell_of_urine", "excretion"], 
    ["continuous_feel_of_urine", "excretion"], 
    ["passage_of_gases", "excretion"], 
    ["internal_itching", "body"],
    ["toxic_look_(typhos)",  "head"],
    ["depression", "head"],
    ["irritability", "head"],
    ["muscle_pain", "body"],
    ["altered_sensorium", "head"],
    ["red_spots_over_body", "body"],
    ["belly_pain",  "stomach"],
    ["abnormal_menstruation", "stomach"],
    ["dischromic_patches", "body"],
    ["watering_from_eyes", "head"],
    ["increased_appetite", "stomach"],
    ["polyuria", "body"],
    ["family_history", "body"],
    ["mucoid_sputum", "body"],
    ["rusty_sputum", "body"],
    ["lack_of_concentration", "head"],
    ["visual_disturbances", "head"],
    ["receiving_blood_transfusion", "body"],
    ["receiving_unsterile_injections", "body"],
    ["coma", "head"],
    ["stomach_bleeding", "stomach"],
    ["distention_of_abdomen", "stomach"],
    ["history_of_alcohol_consumption", "head"],
    ["fluid_overload", "body"],
    ["blood_in_sputum", "body"],
    ["prominent_veins_on_calf", "limbs"],
    ["palpitations", "head"],
    ["painful_walking", "limbs"],
    ["pus_filled_pimples", "body"],
    ["blackheads", "head"],
    ["scurring", "body"],
    ["skin_peeling", "body"],
    ["silver_like_dusting","body"],
    ["small_dents_in_nails", "limbs"],
    ["inflammatory_nails", "limbs"],
    ["blister", "body"],
    ["red_sore_around_nose", "head"],
    ["yellow_crust_ooze", "body"]]

function App() {

  let arr = []
  for (let i=0; i<listOfSymptoms.length; i++) {
      let newSymptom = {
          id: listOfSymptoms[i][0],
          name: pretty(listOfSymptoms[i][0]),
          category: listOfSymptoms[i][1],
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
          <Navbar />
          <Banner symptoms={symptoms} updateSymptoms={updateSymptoms} disease={disease} doctor={doctor} shouldDiagnose={shouldDiagnose}/>
          <Search searchString={searchString} setSearchString={setSearchString}/>
          <Symptoms symptoms={symptoms} updateSymptoms={updateSymptoms} searchString={searchString} groupByCategory={groupByCategory}/>
        </div>
        <div>
          <Sort groupByCategory={groupByCategory} setGroupByCategory={setGroupByCategory}/>
        </div>
      </div>
    </div>
  );
}

export default App;
