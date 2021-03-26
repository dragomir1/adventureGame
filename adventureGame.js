const prompts = require('prompts')

const mudPath = require('./mudpath');

(async () => {
	const yourName = await prompts({
		type: 'text',
		name: 'nameValue',
		message: 'What is your superhero name?',
  })

  const yourAge = await prompts({
    type: 'number',
    name: 'ageValue',
    message: 'How old are you?',
    validate: value => value < 4 ? 'this journey will end you. you must be at least 4' : true,
  })

  const thePassWord = await prompts({
    type: 'password',
    name: 'passwordValue',
    message: 'what is the password?',
  })
  const testing = thePassWord.passwordValue;

  if(testing.length < 2) {
    const PassWordAgain = await prompts({
      type: 'password',
      name: 'passwordValue',
      message: 'make over two characters long',
    })
  }

	const response = await prompts({
		type: 'text',
		name: 'value',
		message: 'do you want to search for water or die of thirst?',
	})
	const startValue = response.value

  if (startValue === 'die' || startValue === 'die of thirst') {
    console.log(`you've chosen poorly, now you must ${startValue}`)
    return
  } else {
    const travelChoices = await prompts({
      type: 'select',
      name: 'directions',
      message: 'Lets get that water....Lead the way...',
      choices: [
        { title: 'to the mountains', value: 'north' },
        { title: 'to the forest', value: 'south' },
        { title: 'I am going to the mudpits', value: 'east' },
      ],
    })
    const travelValue = travelChoices.directions

    if(travelValue === 'east') {
      mudPath();
    }

  }


//a cave
//enter secret password.
//select a n option of three items to use oj journey
//sepak with oracle - takes you diff branch

	if (startValue === '') {
		const tryAgain = await prompts({
			type: 'text',
			name: 'selectedAgain',
			message: 'You must choose search or die?',
		})
		const chooseAgain = tryAgain.selectedAgain

		if (chooseAgain === 'die' || chooseAgain === '' || chooseAgain === 'die of thirst') {
			console.log(`You've learned nothing!`)
			return
		}
	}
})()
