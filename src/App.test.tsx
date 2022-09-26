import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { server } from "./mocks/server";

describe("<App/>", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("renders learn react link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
