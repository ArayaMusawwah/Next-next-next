import AboutPage from "@/pages/about"
import { render } from "@testing-library/react"

jest.mock("next/router", () => jest.requireActual("next-router-mock"))

describe("AboutPage", () => {
  it("render about page", () => {
    const page = render(<AboutPage />)
    expect(page).toMatchSnapshot()
  })
})
