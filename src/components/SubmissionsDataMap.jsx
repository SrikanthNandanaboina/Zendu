import {
  SubmissionCard,
  SubmissionCardsWrapper,
  SubmissionLabel,
  SubmissionTitle,
  SubmissionTitleWrapper,
  SubmissionValue,
  SubmissionsDataMapWrapper,
} from "@/styles/submissions";
import { getStatusColor, isDateExpired } from "@/utils";
import { submissionData } from "@/utils/submissionData";
import { Tag, Badge, Space } from "antd";
import dayjs from "dayjs";
import GoogleMapReact from "google-map-react";

const getDetailElement = (text, value) => `
  <div style="font-size: 14px; margin-top: 8px;">
    <span style="color: grey;">
    ${text}
    </span>
    <span style="color: orange;">${value}</span>
  </div>
`;

const getInfoWindowString = (place) => `
    <div>
      <div style="font-size: 16px;">
        ${place.task}
      </div>
      ${getDetailElement("From", place.from)}
      ${getDetailElement("To", place.to)}
      <div style="font-size: 14px;  margin-top: 8px;">
        <span style="color: grey;">
          Status
        </span>
        <span style="color: ${getStatusColor(place.status)};">${
  place.status
}</span>
      </div>
    </div>
   `;

const SubmissionStatus = ({ status }) => {
  const badgeColor = {
    Unassigned: "white",
  };

  const color = getStatusColor(status);

  return (
    <Tag color={color}>
      <Badge color={badgeColor[status] || color} /> {status}
    </Tag>
  );
};

const Submission = ({ label, value, isExpired }) => {
  return (
    <Space style={{ display: "flex", marginTop: "8px" }}>
      <SubmissionLabel>{label}: </SubmissionLabel>
      <SubmissionValue isExpired={isExpired}>{value}</SubmissionValue>
    </Space>
  );
};

const SubmissionsDataMap = () => {
  const defaultProps = {
    center: {
      lat: 18.012575140055816,
      lng: 79.56517027910624,
    },
    zoom: 12,
  };

  const handleApiLoaded = (map, maps, places) => {
    const markers = [];
    const infowindows = [];

    places.forEach((place) => {
      markers.push(
        new maps.Marker({
          position: {
            lat: place.location.lat,
            lng: place.location.lng,
          },
          map,
        })
      );

      infowindows.push(
        new maps.InfoWindow({
          content: getInfoWindowString(place),
        })
      );
    });

    markers.forEach((marker, i) => {
      marker.addListener("click", () => {
        infowindows[i].open(map, marker);
      });
    });
  };

  console.log({ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY });
  return (
    <SubmissionsDataMapWrapper>
      <SubmissionCardsWrapper>
        {submissionData.map((ele, index) => (
          <SubmissionCard key={index}>
            <SubmissionTitleWrapper>
              <SubmissionTitle>{ele.task}</SubmissionTitle>
              <SubmissionStatus status={ele.status} />
            </SubmissionTitleWrapper>
            <Submission label="From" value={ele.from} />
            <Submission label="To" value={ele.to} />
            <Submission
              label="Due Date"
              value={dayjs(ele.date).format("D MMMM")}
              isExpired={isDateExpired(ele.date)}
            />
          </SubmissionCard>
        ))}
      </SubmissionCardsWrapper>
      <div style={{ height: "480px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
          defaultCenter={[34.0522, -118.2437]}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({ map, maps }) =>
            handleApiLoaded(map, maps, submissionData)
          }
        ></GoogleMapReact>
      </div>
    </SubmissionsDataMapWrapper>
  );
};

export default SubmissionsDataMap;
