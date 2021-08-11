import React from 'react'
import { useState, useEffect } from 'react';






const questions = [
    {
      questionText: 'Lady Finger is a variety of which fruit?',
      answerOptions: [
        { answerText: 'Pineapple', isCorrect: false },
        { answerText: 'Avocado', isCorrect: false },
        { answerText: 'Banana', isCorrect: true },
        { answerText: 'Asparagus', isCorrect: false },
      ],
    },
    {
      questionText: 'Where does the story about carrots helping people to see in the dark come from?',
      answerOptions: [
        { answerText: 'Old Wives Tale', isCorrect: false },
        { answerText: 'It was made up by the RAF during the Second World War', isCorrect: true },
        { answerText: 'Shakespeare believed it and wrote it into a play', isCorrect: false },
        { answerText: 'Originates from the Carrot & Stick Method', isCorrect: false },
      ],
    },
    {
        questionText: 'How many varieties of potatoes are there?',
        answerOptions: [
          { answerText: '8', isCorrect: false },
          { answerText: '72', isCorrect: false },
          { answerText: 'Hundreds', isCorrect: false },
          { answerText: 'Thousands', isCorrect: true },
        ],
      },
