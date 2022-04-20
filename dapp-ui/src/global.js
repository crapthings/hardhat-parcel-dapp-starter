import axios from 'axios'

import { ethers } from 'ethers'

import _ from 'lodash'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { useEffect, useLayoutEffect, useState, useRef, Fragment } from 'react'

import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import createStore from 'zustand'
import classNames from 'classnames'

import { createBrowserHistory } from 'history'

import faker from '@faker-js/faker'

window.axios = axios
window.ethers = ethers

window._ = _
window.dayjs = dayjs
dayjs.extend(relativeTime)

window.useEffect = useEffect
window.useLayoutEffect = useLayoutEffect
window.useState = useState
window.useRef = useRef
window.Fragment = Fragment

window.useNavigate = useNavigate
window.useParams = useParams
window.useSearchParams = useSearchParams

window.createStore = createStore
window.classNames = classNames

window._history = window.router = createBrowserHistory({ window })
window.goto = (...args) => () => router.push(...args)

window.faker = faker

window.App = {}
