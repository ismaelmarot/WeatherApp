import type { WeatherSearchProps } from '../../types'
import { ICONS } from '../../constants'
import { useLocationSearch } from '../../hooks'
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

  const { results, loading, error, clearResults } = useLocationSearch(value)

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
                  clearResults()
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