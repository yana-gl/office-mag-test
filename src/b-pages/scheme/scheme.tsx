import { Wrapper } from '../../e-shared/ui-kit/wrapper/wrapper';
import RenderMermaid from "react-x-mermaid";

export const Scheme = () => {
	return (
		<Wrapper>
			<Diagram/>
		</Wrapper>
	);
};

const code = `
flowchart RL
  %% узлы
  ALIK["Алликсаар"]
  STAN["Станислав<br/>Клитотехнис"]
  OLGA["Ольга Боргдорф"]
  SERG["Сергей Брус"]
  IGOR["Игорь Зверёк"]
  ANTON["Антон Строй"]
  DUH["Ду Хаст<br/>Вячеславович"]
  ANAS["Анастасия Ширинкина"]
  TROY["Александр Троян"]
  LUD["Людмила<br/>Водолазская"]
  DVOZ["Дмитрий Возигнуй"]
  KBOL["Кристина Болтушкина"]
  MVIS["Максим Висолькин"]


  %% пустые узлы для объединения связей
  EMPTY1(( ))
  EMPTY2(( ))
  EMPTY3(( ))
  EMPTY4(( ))

  EMPTY1 --> ALIK

  DUH --- EMPTY1
  ANAS --- EMPTY1

  EMPTY2 --> ALIK
  IGOR --- EMPTY2
  ANTON --- EMPTY2
  STAN --- EMPTY2

  TROY --> STAN
  EMPTY3 --> STAN
  LUD --- EMPTY3
  SERG --- EMPTY3
  OLGA --- EMPTY3

  EMPTY4 --> OLGA

  DVOZ --- EMPTY4
  KBOL --- EMPTY4
  MVIS --- EMPTY4

  MVIS --> DVOZ
`;

export function Diagram() {
	return (
		<RenderMermaid
			mermaidCode={code}
		/>
	);
}
