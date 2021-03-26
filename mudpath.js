const prompts = require('prompts')

 const mudPath = async () => {
    const mudWalk = await prompts({
      type: 'text',
      name: 'walking',
      message: 'while you walk, are you hungry?'
    })
    const hungry = mudWalk.walking;

    if(hungry === 'no' || hungry === '') {
        const starve = await prompts({
        type: 'text',
        name: 'starving',
        message: 'hunger strike?',
      })

    } else {
      const eastFood = await prompts({
        type: 'select',
        name: 'eating',
        message: 'lets eat!',
        choices: [
          { title: 'trees', value: 'tree bark' },
          { title: 'packed lunch', value: 'sandwich' },
          { title: 'nature', value: 'dead bird' },
        ],
      })
    }
  }


  module.exports = mudPath;

