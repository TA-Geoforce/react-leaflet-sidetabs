import React from 'react'
import renderer from 'react-test-renderer'
import MenuButton from './MenuButton'
import Tab from './Tab'
import Sidebar from './Sidebar'
describe('MenuButton', () => {
  it('is truthy', () => {
    expect(MenuButton).toBeTruthy()
  })

  it('has not active class when selected not equals id', () => {
    const tree = renderer.create(
      <MenuButton
        key='test'
        id='test'
        icon='fa fa-home'
        disabled={false}
        selected='nottest'
        collapsed={true}
        onClose={() => {}}
        onOpen={() => {}} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('has active class when selected equals id', () => {
    const tree = renderer.create(
      <MenuButton
        key='test'
        id='test'
        icon='fa fa-home'
        disabled={false}
        selected='test'
        collapsed={false}
        onClose={() => {}}
        onOpen={() => {}} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('has disabled class disabled equals true', () => {
    const tree = renderer.create(
      <MenuButton
        key='test'
        id='test'
        icon='fa fa-home'
        disabled={true}
        selected='test'
        collapsed={false}
        onClose={() => {}}
        onOpen={() => {}} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Tab', () => {
  it('is truthy', () => {
    expect(Tab).toBeTruthy()
  })

  it('has not active class without active prop', () => {
    const tree = renderer.create(
      <Tab id='home' header='Home' icon='fa fa-home'>
        <p>No place like home!</p></Tab>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('has active class with active prop', () => {
    const tree = renderer.create(
      <Tab id='home' header='Home' active={true} icon='fa fa-home'>
        <p>No place like home!</p></Tab>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('makes closeIcon fa fa-caret-right when position is right', () => {
    const tree = renderer.create(
      <Tab id='home' header='Home' active={true} position='right' icon='fa fa-home'>
        <p>No place like home!</p></Tab>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('makes closeIcon fa fa-caret-left when position is left', () => {
    const tree = renderer.create(
      <Tab id='home' header='Home' active={true} position='left' icon='fa fa-home'>
        <p>No place like home!</p></Tab>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Sidebar', () => {
  it('is truthy', () => {
    expect(Sidebar).toBeTruthy()
  })
})
