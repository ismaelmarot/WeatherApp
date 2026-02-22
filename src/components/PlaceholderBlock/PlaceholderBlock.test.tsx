import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PlaceholderBlock } from './PlaceholderBlock'

describe('PlaceholderBlock', () => {
    it('renders the label correctly', () => {
        render(<PlaceholderBlock label="Test Label" />)
        const blockElement = screen.getByText('Test Label')
        expect(blockElement).toBeInTheDocument()
    })
})