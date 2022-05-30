// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { validateLogin } from './CheckLogin'

test('check login SUCCESS', async () => {

    const result = validateLogin({ userName: 'omoena', password: 'asdasd' })

    expect(result).toBe(true)
})

test('check login FAIL', async () => {

    const result = validateLogin({ userName: 'fail', password: 'asdasd' })

    expect(result).toBe(false)
})