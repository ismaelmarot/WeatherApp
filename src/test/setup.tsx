import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.mock('../../components/shared-styles', async (importOriginal) => {
    const actual = await importOriginal<any>()
    return {
        ...actual,
        Container: ({ children }: any) => <div>{children}</div>,
        Label: ({ children }: any) => <div>{children}</div>,
        Value: ({ children }: any) => <div>{children}</div>,
        Strong: ({ children }: any) => <div>{children}</div>,
    }
})