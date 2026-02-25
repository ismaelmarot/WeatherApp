import { useEffect, useState } from 'react'
import type { LocationResultProps, WeatherSearchProps } from '../../types'
import { ICONS } from '../../constants'
import { searchLocations } from '../../services/weather.service'
import {
  Container,
  Input,
  ItemPlace,
  ListPlacesSearch,
  LocationPlace,
  SearchWrapper,
  SearchIcon
} from './WeatherSearch.style'

export function WeatherSearch({
  value,
  onChange,
  onSelect,
}: WeatherSearchProps) {

  const [results, setResults] = useState<LocationResultProps[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (value.length < 2) {
      setResults([])
      setError(null)
      return
    }

    const controller = new AbortController()

    const fetchLocations = async () => {
      try {
        setLoading(true)
        setError(null)

        const data = await searchLocations(value)
        setResults(data)

      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Unexpected error')
        }

        setResults([])
      } finally {
        setLoading(false)
      }
    }

    fetchLocations()

    return () => {
      controller.abort()
    }

  }, [value])

  const showList = results.length > 0 && !loading && !error

  return (
    <Container>
      <SearchWrapper>
        <SearchIcon>
          <ICONS.SearchIcon />
        </SearchIcon>

        <Input
          type="text"
          placeholder="Search city"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {showList && (
          <ListPlacesSearch>
            {results.map((loc) => (
              <ItemPlace
                key={loc.id}
                onClick={() => {
                  onSelect(loc)
                  setResults([])
                }}
              >
                <strong>{loc.name}</strong>
                <LocationPlace>
                  {loc.region}, {loc.country}
                </LocationPlace>
              </ItemPlace>
            ))}
          </ListPlacesSearch>
        )}
      </SearchWrapper>
    </Container>
  )
}