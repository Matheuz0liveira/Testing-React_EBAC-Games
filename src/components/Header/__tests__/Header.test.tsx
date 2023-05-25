import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from '..'
import { store } from '../../../store'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
