import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
// Filter component is a simple component that displays three buttons to filter the data
//filtering is done by setting the search param "discount" to "all", "no-discount" or "with-discount"
//filtering the cabins data from the backend

//making the filter component reusable by passing the filterField and options as props
//filterField is the search param to be set
//options is an array of objects with label and value properties

function Filter({ filterField, options }) {
  // useSearchParams is a custom hook that returns an object with a set method to update the search params
  // searchParams.set("discount", value) sets the search param "discount" to the value passed
  const [searchParams, setSearchParams] = useSearchParams();
  //current filter is to get the current value of the search param
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {/* //mapping over the options array to display the buttons */}
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          //disabling the button if the option value is the same as the current filter
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
