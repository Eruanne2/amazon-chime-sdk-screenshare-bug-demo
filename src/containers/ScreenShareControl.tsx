import React, { useState, useCallback } from "react";
import { useAudioVideo } from "../providers/AudioVideoProvider";
import ButtonGroup from "../components/ButtonGroup";
import IconButton from "../components/IconButton";
import { faDesktop, faTimes } from "@fortawesome/free-solid-svg-icons";

const ScreenShareControl: React.FC = () => {
  const audioVideo = useAudioVideo();

  const [sharing, setSharing] = useState(false);

  const toggleShare = useCallback(async (): Promise<void> => {
    if (sharing) {
      audioVideo?.stopContentShare();
      setSharing(false);
    } else {
      audioVideo?.startContentShareFromScreenCapture();
      setSharing(true);
    }
  }, [audioVideo, sharing]);

  return (
    <>
      <ButtonGroup>
        <IconButton
          icon={sharing ? faTimes : faDesktop}
          onClick={toggleShare}
        />
      </ButtonGroup>
    </>
  );
};

export default ScreenShareControl;
