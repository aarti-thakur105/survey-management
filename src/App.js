import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

// const SURVEY_ID = 1;

const surveyJson = {
  "title": "Gujarat Development Survey",
  "description": "This survey is only for demo purpose",
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=29520f30-e2ae-4449-b3a3-404bdb6164d8",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "dropdown",
      "name": "question1",
      "title": "How would you rate the overall development progress in Gujarat over the past 5 years?\n",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Excellent"
       },
       {
        "value": "Item 2",
        "text": "Good"
       },
       {
        "value": "Item 3",
        "text": "Average"
       },
       {
        "value": "Item 4",
        "text": "Poor"
       }
      ]
     },
     {
      "type": "checkbox",
      "name": "question2",
      "title": "Which sector(s) do you believe require the most attention for further development in Gujarat? (Select all that apply)\n",
      "choices": [
       {
        "value": "Item 1",
        "text": "Agriculture"
       },
       {
        "value": "Item 2",
        "text": "Industry"
       },
       {
        "value": "Item 3",
        "text": "Infrastructure"
       },
       {
        "value": "Item 4",
        "text": "Education"
       },
       {
        "value": "Item 5",
        "text": "Healthcare"
       },
       {
        "value": "Item 6",
        "text": "Tourism"
       }
      ]
     },
     {
      "type": "comment",
      "name": "question3",
      "title": "In your opinion, what are the biggest challenges hindering the development of rural areas in Gujarat?\n"
     },
     {
      "type": "rating",
      "name": "question4",
      "title": "How satisfied are you with the availability and quality of healthcare services in your locality?\n",
      "rateType": "smileys",
      "autoGenerate": false,
      "rateValues": [
       {
        "value": 1,
        "text": "Very dissatisfied"
       },
       {
        "value": 2,
        "text": "Dissatisfied"
       },
       {
        "value": 3,
        "text": "Neutral"
       },
       {
        "value": 4,
        "text": "Satisfied"
       },
       {
        "value": 5,
        "text": "Very satisfied"
       }
      ]
     },
     {
      "type": "boolean",
      "name": "question5",
      "title": "Have you noticed any significant improvements in public transportation infrastructure in Gujarat recently?\n"
     },
     {
      "type": "tagbox",
      "name": "question6",
      "title": "Which of the following initiatives or projects do you think have had the most positive impact on Gujarat's development? (Select all that apply)\n",
      "choices": [
       {
        "value": "Item 1",
        "text": "Swachh Bharat Mission"
       },
       {
        "value": "Item 2",
        "text": "Smart Cities Mission"
       },
       {
        "value": "Item 3",
        "text": "Make in India campaign"
       },
       {
        "value": "Item 4",
        "text": "Digital India initiative"
       },
       {
        "value": "Item 5",
        "text": "Gujarat International Finance Tec-City (GIFT City)"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "question7",
      "title": "Do you think the government's focus on renewable energy projects is contributing to sustainable development in Gujarat?\n",
      "choices": [
       {
        "value": "Item 1",
        "text": "Yes"
       },
       {
        "value": "Item 2",
        "text": "No"
       },
       {
        "value": "Item 3",
        "text": "Not sure"
       }
      ]
     },
     {
      "type": "comment",
      "name": "question8",
      "visibleIf": "{question1} = 'Item 4' or {question1} = 'Item 3'",
      "title": "If you could suggest one area for immediate improvement in Gujarat's development efforts, what would it be?\n\nNote: This question is being presented to you as per your response of Question 1."
     }
    ]
   }
  ]
 }

function App() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

// function saveSurveyResults(url, json) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       // Handle success
//     } else {
//       // Handle error
//     }
//   })
//   .catch(error => {
//     // Handle error
//   });
// }

export default App;