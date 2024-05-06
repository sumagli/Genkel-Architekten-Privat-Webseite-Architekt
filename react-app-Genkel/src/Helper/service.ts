import React from "react";
import axios from "axios";
import Partner from "../Components/Partner/Partner";
import { Project, ProjectsArray } from "../App";

interface VacationMessageData {
  message: string;
  showMessage: boolean;
}

type OpeningTime = {
  day: string;
  hours: string; // Assuming hours is a string, adjust the type if necessary
};

export const useVacationMessage = () => {
  const [vacationMessageData, setVacationMessageData] =
    React.useState<VacationMessageData>({ message: "", showMessage: false });
  React.useEffect(() => {
    const fetchVacationMessage = async () => {
      try {
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/urlaub?version=draft&token=EH3r7BBXGHB0339e79k4FQtt&cv=1709743318"
        );
        if (response.data && response.data.story.content) {
          setVacationMessageData({
            message: response.data.story.content.Nachricht,
            showMessage: response.data.story.content.Nachricht_Anzeigen,
          });
        }
      } catch (error) {
        console.error("Error fetching vacation message:", error);
      }
    };

    fetchVacationMessage();
  }, []);

  return vacationMessageData;
};

export const useMainPageImages = () => {
  const [imageData, setImageData] = React.useState({ ImageUrls: [] });

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/landing-page-bilder?version=draft&token=EH3r7BBXGHB0339e79k4FQtt&cv=1709757114"
        );
        const imageUrls = response.data.story.content.Bilder.map(
          (item: any) => item.filename
        );
        setImageData({ ImageUrls: imageUrls });
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return imageData;
};

export const useServicePricingWomen = () => {
  const [pricingData, setPricingData] = React.useState([]);

  React.useEffect(() => {
    const fetchPricing = async () => {
      try {
        // Assuming you have a similar URL for your pricing data
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/preis-listen/preisliste-damen?version=draft&token=EH3r7BBXGHB0339e79k4FQtt&cv=1709740501"
        );
        const listData = response.data.story.content.Liste.map((item: any) => ({
          Leistung: item.Leistung,
          PreisSpalte1: item.PreisSpalte1,
          PreisSpalte2: item.PreisSpalte2,
          PreisSpalte3: item.PreisSpalte3,
          PreisSpalte4: item.PreisSpalte4,
        }));
        setPricingData(listData);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    fetchPricing();
  }, []);

  return pricingData;
};

export const useServicePricingMan = () => {
  const [pricingData, setPricingData] = React.useState([]);

  React.useEffect(() => {
    const fetchPricing = async () => {
      try {
        // Assuming you have a similar URL for your pricing data
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/preis-listen/preisliste-herren?cv=1709743783&token=EH3r7BBXGHB0339e79k4FQtt&version=published"
        );
        const listData = response.data.story.content.Zeile.map((item: any) => ({
          Leistung: item.Leistung,
          PreisSpalte1: item.PreisSpalte1,
          PreisSpalte2: item.PreisSpalte2,
          PreisSpalte3: item.PreisSpalte3,
          PreisSpalte4: item.PreisSpalte4,
        }));
        setPricingData(listData);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    fetchPricing();
  }, []);

  return pricingData;
};

export const useServicePricingChildren = () => {
  const [pricingData, setPricingData] = React.useState([]);

  React.useEffect(() => {
    const fetchPricing = async () => {
      try {
        // Assuming you have a similar URL for your pricing data
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/preis-listen/preisliste-kinder?version=draft&token=EH3r7BBXGHB0339e79k4FQtt&cv=1709742389"
        );
        const listData = response.data.story.content.Liste.map((item: any) => ({
          Leistung: item.Leistung,
          PreisSpalte1: item.PreisSpalte1,
          PreisSpalte2: item.PreisSpalte2,
          PreisSpalte3: item.PreisSpalte3,
          PreisSpalte4: item.PreisSpalte4,
        }));
        setPricingData(listData);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    fetchPricing();
  }, []);

  return pricingData;
};
export const useTeamImages = () => {
  const [imageData, setImageData] = React.useState({ ImageUrls: [] });

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/team-bilder?version=draft&token=EH3r7BBXGHB0339e79k4FQtt&cv=1709753447"
        );
        const imageUrls = response.data.story.content.Bilder.map(
          (item: any) => item.filename
        );
        setImageData({ ImageUrls: imageUrls });
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return imageData;
};

export const useVitaJoern = () => {
  const [vitaData, setVitaData] = React.useState([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/lebenslauf?version=draft&token=NVIqECUf49USBq8O93Z3SAtt&cv=1714248089"
        );
        const listData = response.data.story.content.Eintraege.map(
          (item: any) => ({
            year: item.Jahr,
            leistungsphase: item.Leistungsphase,
            projekt: item.Projekt,
            partner: item.Partner,
            rendering: item.Rendering,
          })
        );
        setVitaData(listData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return vitaData;
};

export const usePartners = () => {
  const [vitaData, setVitaData] = React.useState([]);

  React.useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/partner?version=draft&token=NVIqECUf49USBq8O93Z3SAtt&cv=1714250598"
        );
        const listData = response.data.story.content.Partner.map(
          (item: any) => ({
            name: item.name,
            contacts: Array.isArray(item.Anprechpartner)
              ? item.Anprechpartner.map(
                  (contact: any) => contact.Ansprechpartner
                )
              : [],
            phone: item.Telephone,
            website: item.webseite,
            projects: item.projekte,
          })
        );
        setVitaData(listData);
      } catch (error) {
        console.error("Error fetching partner data:", error);
      }
    };

    fetchPartners();
  }, []);

  return vitaData;
};

export const useOfficeProfile = () => {
  const [vitaData, setVitaData] = React.useState([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/buero-profil?version=draft&token=NVIqECUf49USBq8O93Z3SAtt&cv=1714418311"
        );
        const listData = response.data.story.content.Eintraege.map(
          (item: any) => ({
            headline: item.Ueberschrift,
            text: item.Text,
          })
        );
        setVitaData(listData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return vitaData;
};

export const useNews = () => {
  const [vitaData, setVitaData] = React.useState([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/news?version=draft&token=NVIqECUf49USBq8O93Z3SAtt&cv=1714419373"
        );
        const listData = response.data.story.content.Eintraege.map(
          (item: any) => ({
            picture: item.Bild,
            title: item.Titel,
            date: item.Datum,
            text: item.Text,
            link: item.Link,
            linkText: item.LinkText,
          })
        );
        setVitaData(listData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return vitaData;
};

export const useProjects = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/projekte?version=draft&token=NVIqECUf49USBq8O93Z3SAtt&cv=1714476295"
        );
        const projectsData: Project[] = response.data.story.content.Projekte.map((proj: any) => ({
          name: proj.Title,
          image: proj.Bilder.map((img: any) => ({
            imageLink: img.Bild.filename,
            photoBy: img.Fotograph
          })),
          title: proj.Title,
          subtitle: proj.Bauort,
          partner: proj.Partner,
          buildingTime: proj.Bauzeit,
          bauherr: proj.Bauherr,
          Taetigkeitsfelder: proj.Taetigkeitsfelder,
          BeschreibungMaßnahme: proj.BeschreibungMasnahme,
          link: proj.Link.url,
          info: proj.Text,
          mainPagePosition: parseInt(proj.PositionMainpage)
        }));
        setProjects(projectsData );
       
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return projects;
};

export const useOpeningTimes = () => {
  const [openingTimes, setOpeningTimes] = React.useState<OpeningTime[]>([]); // Explicitly set the type of openingTimes state
  const dayOrder = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ]; // Define the order of days
  React.useEffect(() => {
    const fetchOpeningTimes = async () => {
      try {
        const response = await axios.get(
          "https://api.storyblok.com/v2/cdn/stories/oeffnungzeiten?version=draft&token=EH3r7BBXGHB0339e79k4FQtt&cv=1709756348"
        );
        const openingData = response.data.story.content;
        const days = Object.keys(openingData).filter(
          (day) =>
            day !== "_uid" &&
            day !== "component" &&
            day !== "_editable" &&
            openingData[day]
        );
        let formattedOpeningTimes: OpeningTime[] = days.map((day) => ({
          day: day,
          hours: openingData[day],
        }));

        // Sort the opening times according to the defined order of days
        formattedOpeningTimes = formattedOpeningTimes.sort(
          (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
        );

        setOpeningTimes(formattedOpeningTimes);
      } catch (error) {
        console.error("Error fetching opening times:", error);
      }
    };

    fetchOpeningTimes();
  }, []);

  return openingTimes;
};
