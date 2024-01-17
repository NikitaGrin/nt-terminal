import styled from "styled-components";
import Card from "../../ui/Card";

const StyledTicker = styled.div`
  padding: 3rem;
`;

function Ticker() {
  return (
    <Card>
      <div>asset</div>
      <div>numberOfItems</div>
      <div>
        <div>
          <span>currentsellprice</span>
          <button>sell</button>
        </div>
        <div>
          <span>currentbuyprice</span>
          <button>buy</button>
        </div>
      </div>
    </Card>
  );
}

export default Ticker;
