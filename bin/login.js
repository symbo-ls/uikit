'use strict'

program
  .command('login [destination]')
  .description('Sign in to Symbols')
  .argument('<username>', 'user to login')
  .argument('[password]', 'password for user, if required', 'no password given')
  .action(async (username, password) => {
    console.log('username:', username)
    console.log('password:', password)

    const response = await fetch(API_URL)
    const body = await response.json()
    console.log(body)
  })