import React, { ReactNode } from "react";
import { render, fireEvent } from "@testing-library/react";
import DirectorModal from "../components/Movies/Movie/DirectorModal/DirectorModal";
import "@testing-library/jest-dom";

interface Props {
  description: string;
  children: ReactNode;
  name: string;
}
function renderDirectorModal(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    name: "Koduri Srisaila Sri Rajamouli",
    description:
      "Koduri Srisaila Sri Rajamouli is an Indian film director and screenwriter who primarily works in Telugu cinema. He is the highest paid director in India, and is known for his action, fantasy, and epic genre films.",
    children: "Koduri Srisaila Sri Rajamouli",
  };
  return render(<DirectorModal {...defaultProps} {...props} />);
}

describe("DirectorModal", () => {
  it("renders a button", () => {
    const { getByText } = renderDirectorModal();
    const button = getByText("Koduri Srisaila Sri Rajamouli");
    expect(button).toBeInTheDocument();
  });

  it("renders a modal when button clicked", () => {
    const { getByText } = renderDirectorModal();
    const button = getByText("Koduri Srisaila Sri Rajamouli");
    fireEvent.click(button);
    const modal = getByText(
      "Koduri Srisaila Sri Rajamouli is an Indian film director and screenwriter who primarily works in Telugu cinema. He is the highest paid director in India, and is known for his action, fantasy, and epic genre films."
    );
    expect(modal).toBeInTheDocument();
  });
});
