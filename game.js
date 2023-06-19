const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const stateButtonsElement = document.getElementById('state-buttons')

let state = {}
const pics = ["Pics/11 Node 0.png", "Pics/11 Node 1.png", "Pics/11 node 2.png", "Pics/11 Node 3.png", "Pics/11 Node 4.png", "Pics/11 Node 5.png", "Pics/11 Node 6.png", "Pics/11 Node 7.png", "Pics/11 Node 8.png", "Pics/11 node 9.png", "Pics/11 node 10.png", "Pics/11 Node 5.png", "Pics/11 Node 12.png", "Pics/11 Node 5.png", "Pics/11 Node 14.png", "Pics/11 Node 7.png", "Pics/11 Node 16.png", "Pics/11 Node 17.png", "Pics/11 Node 18.png", "Pics/11 Node 19.png", "Pics/Node 20 placeholder.png", "Pics/11 Node 21.png", "Pics/Node 20 placeholder.png", "Pics/11 Node 23.png", "Pics/Node 20 placeholder.png", "Pics/11 Node 25.png", "Pics/Node 20 placeholder.png", "Pics/11 Node 33.png", "Pics/Node 20 placeholder.png", "Pics/11 Node 29 and 31.png", "Pics/Node 20 placeholder.png", "Pics/11 Node 29 and 31.png", "Pics/Node 20 placeholder.png", "Pics/11 Node 33.png"]
const image = document.createElement('img')
image.src = pics[0];
document.querySelector('#pixel').appendChild(image)


function startGame(){
  state = {}
  showTextNode(1)
  showStateNode()
}

function changeImg(textNodeIndex){

  const newImg = document.querySelector;
  image.src = pics[textNodeIndex - 1];

  }


function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)

    textElement.innerText = textNode.text

    while(optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option =>{
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => 
            
            selectOption(option),
            changeImg(textNodeIndex)
            )

            optionButtonsElement.appendChild(button)
        }
    })
}




function showStateNode() {

  while(stateButtonsElement.firstChild) {
    stateButtonsElement.removeChild(stateButtonsElement.firstChild)
  }

  

  let keyArray = Object.keys(state).filter(key => state[key])
  let keysAsText = keyArray.toString()


  const button = document.createElement('button')
        button.innerText = keysAsText
        button.classList.add('state-btn')


       stateButtonsElement.appendChild(button)



//   keys.forEach(key => {
//     if(showState(key)) {
//     const button = document.createElement('button')
//         button.innerText = console.log(key)
//         button.classList.add('state-btn')


//        stateButtonsElement.appendChild(button)
// }})
    
  
  

  // keys.forEach(key){
  //   const button = document.createElement('button')
  //       button.innerText = key.text
  //       button.classList.add('state-btn')


  //      stateButtonsElement.appendChild(button)
  // }

  // for(var key in keys){
  //     const button = document.createElement('button')
  //      button.innerText = key.text
  //      button.classList.add('state-btn')


  //      stateButtonsElement.appendChild(button)
  // }



//  state.forEach(value ={
//     if(value = true){
//       const button = document.createElement('button')
//       button.innerText = value.text
//       button.classList.add('state-btn')


//       stateButtonsElement.appendChild(button)
//     }

//  })
}

function showState(value) {
  return value == true || value == false
}








function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
const nextTextNodeId = option.nextText
state = Object.assign(state, option.setState)
showTextNode(nextTextNodeId)
showStateNode()
}





const textNodes = [
  {
    id: 1,
    
    text: 'You emerge from your forest cottage in search of adventure and notice a jar of blue goo on your doorstep.',
    options: [
      {
        text: 'Take goo',
        setState: {blueGoo: true, copper: true, shield: false, sword: false, gold: false, silver: false},
        nextText: 2
      },

      {
        text: 'Leave the goo',
        setState: {copper: true},
        nextText: 2

      }
    ]
},
      {
        id: 2,
        text: 'You venture forth in search of answers to where the goo came from are when you come across a merchant.',
        options: [
            {
                text: 'Trade the goo for a sword',
                requiredState: (currentState) =>currentState.blueGoo,
                setState: { blueGoo: false, sword: true },
                nextText: 3
            },
            {
                text: 'Trade the goo for a shield',
                requiredState: (currentState) =>currentState.blueGoo,
                setState: { blueGoo: false, shield: true },
                nextText: 3
            },
            {
                text: 'Ignore the merchant',
               
                nextText: 3
            }
        ]
        
    },
    {
      id: 3,
      text:'You venture forth in search of a quest when you come upon a fork in the road.',
      options: [
        {
            text: 'You take the path that winds left into a dark forest.',
            nextText: 4
        },
        {
            text: 'You take the path that winds right through the countryside towards the nearby city.',
            nextText: 5

        }
      ]
    },


    {
      id: 5,
      text: 'While walking through the countryside towards the city you are accosted by some highwaymen. Although their weapons are sharp the men seem feeble and to be starving They demand whatever valuables you have or you will pay with your life.',
      options: [
        {
          text: 'Hand over what little copper you have.',
          requiredState: (currentState) =>currentState.copper,
          setState: { copper: false, gold: false, shield: false, sword: false },
          nextText: 7
        },
        {
          text: 'Pull out your sword and face the men in combat.',
          requiredState: (currentState) =>currentState.sword,
          nextText: 9
        }
      ]
    },

    {
      id: 7,
      text: 'The highwaymen take your copper and all of your equipment that they believe had value. They stay true to their word and leave you alive.',
      options: [
        {
          text: 'Continue on to the city.',
          nextText: 11
        }
       
      ]
    },

    {
      id: 9,
      text: 'You quickly disarm the three bandits and as they huddle together in fear you feel a sense of pity..',
      options: [
        {
          text: 'Slay the three bandits and take what equipment from them that you can before heading to the city.',
          setState: {silver: true, shield: true},
          nextText: 11
        },
        {
          text: 'Rob the three bandits but leave them with their lives before heading to the city.',
          setState: {silver: true, shield: true},
          nextText: 11

        },
        {
          text: 'Lecture the bandits about the life they are living but give them your copper anyways as a token of mercy before heading to the city.',
          setState: {copper: false},
          nextText: 11  
        }
      ]
    },

    {
      id: 11,
      text: 'You arrive at the city gate and are confronted by a guard. "The toll is a gold piece if you want to enter the city!',
      options: [
        {
          text: 'Pay the toll and enter the city.',
          requiredState: (currentState) =>currentState.gold,
          setState: {gold: false},
          nextText: 15
        },
        {
          text: 'Accuse the guard of attempting to shake you down for money.',
          nextText: 13
        }

      ]
    },

    {
      id: 13,
      text: 'The guard tells you to keep your voice down and lets you into the city for free',
      options: [
        
        {
          text: 'Smugly enter the city.',
          nextText: 15
        }

      ]
    },

    {
      id: 15,
      text: 'You step inside the city into a bustling market with the castle just a ways ahead.',
      options: [
        {
          text: 'Continue on to request an audience with the king.',
          nextText: 17
        }
       
      ]
    },

    {
      id: 17,
      text: 'You enter the castle and stand before the king.',
      options: [
        {
          text: 'Demand compensation for your run-in with the bandits outside the city.',
          nextText: 19
        },
      ]
    },

    {
      id: 19,
      text: 'Offended, the king orders you to be tossed in prison for the rest of your days. GAME OVER',
      options: [
        {
          text: 'Restart',
          nextText: 1
        }
      ]
    },

    






    

    {
      id: 4,
      text:'Bravely, you decide to head into the dark forest. After following the path for a time you come upon a large cave opening hidden within the depths of the forest.',
      options: [
        {
            text: 'Enter the cave and discover what treasure and secrets may be in store.',
            nextText: 6
        },
        {
            text: 'Ignore the cave and continue on the path through the forest.',
            nextText: 8

        }
      ]
    },








    {
      id: 6,
      text:'You creep forth into the bowels of the cave, sinking deeper and deeper into the earth as a foul aroma fills the air. At last you reach the end and discover a massive chamber filled with gold, guarded by a dragon at the far end who notices you immediately upon entry.',
      options: [
        {
            text: 'You raise your sword high as you charge, prepared to strike the fatal blow into the dragon.',
            requiredState: (currentState) =>currentState.sword,

            nextText: 10
        },
        {
            text: 'You raise your shield in preparation for an attack.',
            requiredState: (currentState) =>currentState.shield,

            nextText: 12

        },
        {
          text: 'You flee back the way you came before the dragon can act.',

          nextText: 4
        }
      ]
    },

    {
      id: 10,
      text:'As you bravely charge forth to slay the dragon you begin to realize you misjudged the distance between you and the dragon and it will take longer to reach him than expected. The dragon also notices this and immediately releases a torrent of dragonfire which consumes the cave and burns you to a crisp. ',
      options: [
        {
          text: 'You have died, game over',
          setState: { copper: true, gold: false, shield: false, sword: false },

          nextText: 1
        }
      ]
    },

    {
      id: 12,
      text:'You raise your shield just as the dragon releases a fireball in your direction. The flames crash against your shield for a moment until they subside, you have survived the attack. The dragon, stunned that you are still standing, just stares in amazement.',
      options: [
        {
          text: 'Keep your shield raised as you back out of the cave',
          nextText: 4

        },
        {
          text: 'Approach the dragon while it watches you with curiosity.',
          nextText: 14
        }
      ]
    },

    {
      id: 14,
      text:'As you approach the dragon begins to speak! "No adventurer who has entered this cave has ever survived my dragonfire. You are truly different from the rest, and I suspect a descendant of dragons like myself. You are my kin, please help yourself to some of my treasure.',
      options: [
        {
          text: "Thank the dragon for it's kind words and take your share of the gold and equipment left by past adventurers before exiting the cave and continuing down the path.",
          nextText: 8,
          setState: { copper: true, gold: true, shield: true, sword: true, whistle: true},

        }
      ]
    },








    {
      id: 8,
      text: 'As you continue along the path through the forest you begin to hear the sound of running water. You walk through a clearing and discover a bridge before you stretching across a raging river. As you approach the bridge a troll climbs out from under to confront you. "Whoever dares cross my bridge will meet my wrath unless they can answer my riddle! What can run but never walks, has a mouth but never talks, has a head but never weeps and a bed but never sleeps?',
      options: [
        {
          text: 'Uhh.. a baby that can run?',
          nextText: 16
        },
        {
          text: 'Uhh.. a river?',
          nextText: 18
        },
        {
          text: 'Charge at the troll while he recites the riddle',
          requiredState: (currentState) =>currentState.sword,
          nextText: 20

        }

      ]
    },

    {
      id: 16,
      text: 'The troll roars "No! Baby cannot run!" as he charges and throws you to the ground, knocking your equipment away. You watch as he raises his massive fists above his head and you watch them swing down toward you before everything turned to black',
      options: [
        {
          text: 'You have died, game over.',
          nextText: 1
        }
      ]
    },

    {
      id: 18,
      text: 'The troll smiles as he steps to the side of the bridge, gesturing for you to go forth in peace. "You alright for tiny human, go on across my bridge." ',
      options: [
        {
          text: 'Cross the bridge and rejoin the path through the forest on the other side',
          nextText: 22
        }

      ]
    },

    {
      id: 20,
      text: 'You charge while the troll recounts the riddle, catching him by surprise. You plunge your sword through his heart before sheathing it and stepping away from his lifeless body.',
      options: [
        {
          text: 'Cross the bridge and rejoin the path through the forest on the other side',
          nextText: 22
        }
      ]

    },

    {
      id: 22,
      text: 'You finally make your way through the forest and emerge at its end. You see at the edge of the forest the barren land begins to rise until it reaches a cliff upon which sits a prominent tower, overlooking the ocean beyond.',
      options:[
        {
          text: 'Continue on up the hill and enter the tower',
          nextText: 24
        }
      ]
    },

    {
      id: 24,
      text: 'You enter the tower and make your way up its winding staircase. At the top you find a wizard who greets you with open arms.',
      options: [
        {
          text: 'Attack with your sword before he can cast a spell',
          requiredState: (currentState) =>currentState.sword,
          nextText: 26

        },
        
        {
          text: 'Greet the wizard',
          nextText: 28
        },
        {
          text: 'Greet the wizard and ask him if he knows anything about the jar left at your house',
          requiredState: (currentState) =>currentState.blueGoo,
          nextText: 28

        }
      ]
    },

    {
      id: 26,
      text: 'Quickly you plunge the sword through the wizards heart. The shocked look on his face tells you he was not expecting this. With his dying breath he tells you that you are a fool who has doomed the world',
      options: [
        {
          text: 'Disappointed that the end of your quest led to a crazy old wizard, you take your things and return back to your life of monotony.',
          nextText: 40
        }
      ]
    },

    {
      id: 28,
      text: 'The wizard tells you that he was the one who left the jar with you for safe keeping. There is a warlock searching for it to enhance his own power for evil and it is important that the wizard hide it in the last, most unassuming place the warlock would look',
      options:[
        {
          text: 'Tell the wizard that you traded the jar for a sword',
          requiredState: (currentState) =>currentState.sword,
          nextText: 30
        },
        {
          text: 'Tell the wizard that you traded the jar for a shield',
          requiredState: (currentState) =>currentState.shield,
          nextText: 32
        },
        {
          text: 'Show the wizard the jar and tell him about the merchant who tried to trade for it at the start of the quest',
          requiredState: (currentState) =>currentState.blueGoo,
          nextText: 34

        }
      ]
    },

    {
      id: 30,
      text: 'The wizard scolds you for trading the jar for power. He says you are exactly like the warlock and demands you leave the tower',

    },

    {
      id: 32,
      text: 'The wizard scolds you for trading the jar for protection. He calls you a coward and demands you leave the tower.',
    },

    {
      id: 34,
      text: 'The wizard informs you that the merchant must be the warlock and praises you for resisting his temptation. He informs you that the warlock is his brother and must be destroyed before he can carry out his evil plans. You have proven yourself a true hero by delivering the jar safely here, and so you must be the one to finish him off.',
      options: [

      ]
    }


    
  
]

startGame()