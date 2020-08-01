const container = `
  width: 100%;
  padding-right: 15px; 
  padding-left: 15px; 
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 800px) {
    & {
      max-width: 284px;
    }
  }

  /* BREAKPOINT 768px */
  @media (min-width: 48em) {
    & {
      max-width: 720px;
    }
  }

  @media (min-width: 680em) {
    & {
      max-width: 960px;
    }
  }

  * BREAKPOINT 992px */
  @media (min-width: 71em) {
    & {
      max-width: 960px;
    }
  }

  /* BREAKPOINT 992px */
  @media (min-width: 72em) {
    & {
      max-width: 1110px;
    }
  }

  
`;

export default container;
