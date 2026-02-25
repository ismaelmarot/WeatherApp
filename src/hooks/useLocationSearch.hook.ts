import { useEffect, useState } from 'react'
import type { LocationResultProps } from '../types'
import { searchLocations } from '../services/weather.service'

export function useLocationSearch(value: string) {
    const [results, setResults] = useState<LocationResultProps[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (value.length < 2) {
            setResults([])
            setError(null)
            return
        }

        let isMounted = true

        const fetchLocations = async () => {
        try {
            setLoading(true)
            setError(null)

            const data = await searchLocations(value)

            if (isMounted) {
                setResults(data)
            }
        } catch (err: unknown) {
            if (!isMounted) return

            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError('Unexpected error')
            }

            setResults([])
        } finally {
            if (isMounted) setLoading(false)
        }
        }

        fetchLocations()

        return () => {
        isMounted = false
        }
    }, [value])

    return {
        results,
        loading,
        error,
        clearResults: () => setResults([])
    }
}