import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { VisibilityItem } from './VisibilityItem'

describe('VisibilityItem', () => {
    test('renders label, value and unit', () => {
        render(<VisibilityItem visibilityKm={12} />)


        expect(screen.getByText('Visibility')).toBeInTheDocument()

        expect(screen.getByText('12')).toBeInTheDocument()

        expect(screen.getByText('km')).toBeInTheDocument()
    })
})