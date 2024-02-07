import { ReactNode, useState } from "react";
import { Container,  TabContainer, TabOptions } from "./styles";

export interface TabItems {
  label: string;
  content: ReactNode;
}

type TabProps = {
  items: TabItems[];
}

export default function Tabs({items}: TabProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index: number) => {
    setActiveTab(index)
  }

  return (
    <Container>
      <TabContainer>
        {items && items.map((item, index) => (
          <TabOptions key={index} isActive={activeTab === index + 1} onClick={() => toggleTab(index + 1)} >
            {item.label}
          </TabOptions>
        ))}
      </TabContainer>

      {items && items[activeTab - 1].content}
      
    </Container>
  );
}