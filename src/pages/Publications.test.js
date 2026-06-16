import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import Publications from "./Publications";
import { publicationsData } from "../data/publicationsData";

// NOTE: We test leaf components in isolation rather than <App />, because
// react-router-dom v7 cannot be resolved by CRA's bundled Jest resolver,
// which makes any test that imports App fail to load.

function renderPublications() {
  return render(
    <HelmetProvider>
      <Publications />
    </HelmetProvider>
  );
}

test("renders the Publications heading", () => {
  renderPublications();
  expect(screen.getByRole("heading", { name: /publications/i })).toBeInTheDocument();
});

test("renders every publication title with a DOI link", () => {
  renderPublications();
  publicationsData.forEach((pub) => {
    expect(screen.getByText(pub.title)).toBeInTheDocument();
  });
  const doiLinks = screen.getAllByRole("link", { name: "[DOI]" });
  expect(doiLinks).toHaveLength(publicationsData.length);
});

test("sorts publications newest first", () => {
  renderPublications();
  const years = [...publicationsData].sort((a, b) => b.year - a.year).map((p) => p.year);
  expect(years).toEqual([...years].sort((a, b) => b - a));
});
