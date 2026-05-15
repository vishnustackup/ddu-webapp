import { useEffect, useState } from "react";
import { getdata } from "../Api/api";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Card = styled.div`
  margin: 2px;
  border-radius: 10px;
  background: linear-gradient(#abf160, #c4f3c4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Text = styled.h1`
  text-decoration: 5px underline red;
  margin-bottom: 10px;
`;
const Section = styled.div``;
const SubHead = styled.h3`
  color: grey;
  font-family: "arial";
`
const Getdata = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await getdata(data);
      setdata(res.data);
      console.log(res);
    };
    fetchdata();
  }, []);
  return (
    <Section>
      <GridContainer>
        {data.map((e, index) => (
          <Card key={e._id || index}>
            <Text>{e.title}</Text>
            <p>{e.description}</p>
            <SubHead>{e.author}</SubHead>
          </Card>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Getdata;
