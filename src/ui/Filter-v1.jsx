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

function Filter() {
  // useSearchParams is a custom hook that returns an object with a set method to update the search params
  // searchParams.set("discount", value) sets the search param "discount" to the value passed
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("discount", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      <FilterButton onClick={() => handleClick("all")}>All</FilterButton>
      <FilterButton onClick={() => handleClick("no-discount")}>
        No Discount
      </FilterButton>
      <FilterButton onClick={() => handleClick("with-discount")}>
        With Discount
      </FilterButton>
    </StyledFilter>
  );
}

export default Filter;
