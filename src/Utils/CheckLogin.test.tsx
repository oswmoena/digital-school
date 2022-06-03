// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { validateLogin } from './CheckLogin'

test('check login SUCCESS', async () => {

    const login = validateLogin({ userName: 'omoena', password: '123' })
    const {result} = login

    expect(result).toBe(true)
})

test('check login FAIL', async () => {

    const login = validateLogin({ userName: 'fail', password: 'asdasd' })
    const {result} = login

    expect(result).toBe(false)
})