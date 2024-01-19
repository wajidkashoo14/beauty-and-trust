"use client";
import { useState } from "react";
import data from "../../components/Data/tourCardData";
import { Accordion } from "flowbite-react";
import { useParams } from "next/navigation";
import styles from "../../styles/style.module.css";

export default function Page() {
  const destination = useParams()?.query;
  const [selected, setselected] = useState(null);
  const [multiple, setMultiple] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleClick(currentId) {
    setselected(currentId === selected ? null : currentId);
  }
  function handleMultipleSlection(currentId) {
    let copyMultiple = [...multipleSelected];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultipleSelected(copyMultiple);
  }

  return (
    <div class="min-h-full p-10">
      <h1 class="text-center text-3xl font-medium">Heading of page</h1>
      <div>
        <h1 class="text-2xl font-medium mb-5">Overview</h1>
        <p class="w-1/2 font-thin mb-5">
          {`Kashmir 3D2N Tour has been designed to give Tourists an Everlasting
          Experience of Kashmir’s Mesmerising Scenic Beauty, Rich Culture &
          Heartwarming Hospitality. Ask your Tour Advisor for making any changes
          in the itinerary as per your wishes. Add “Activities”, and “Special
          Requests” to make Your Tour Personalised as per your Unique Taste. We
          encourage customers to Handpick their Touring Destinations, Hotels,
          Transportation, Activities, and Cuisines as per their preferences &
          budget. Talk to our tour advisors to know more. We request Travellers
          to Review us after their Tour Ends and needless to say, we love to get
          5 Stars. So, the pressure is on us to meet and surpass your
          expectations so that you don’t give us anything short of a 5 Star
          rating. Please Check our Reviews at the bottom of this page to see
          what people say about us.`}
        </p>
      </div>
      <div className={styles.wrapper}>
        <button className="btn" onClick={() => setMultiple(!multiple)}>
          Enable Multiple Select
        </button>
        <div className={styles.accordian}>
          {data && data.length > 0
            ? data.map((dataItem) => (
                <div
                  key={dataItem.id}
                  className={styles.item}
                  onClick={
                    multiple
                      ? () => handleMultipleSlection(dataItem.id)
                      : () => handleSingleClick(dataItem.id)
                  }
                >
                  <div className={styles.title}>
                    <h3>title</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id ||
                  multipleSelected.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">i like autumn</div>
                  ) : null}
                </div>
              ))
            : "No Data"}
        </div>
      </div>
    </div>
  );
}
