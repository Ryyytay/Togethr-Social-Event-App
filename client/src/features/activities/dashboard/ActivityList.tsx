import { Box } from "@mui/material";
import ActivitiyCard from "./ActivitiyCard";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
};

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivitiyCard
          key={activity.id}
          activity={activity}
          selectActivity={selectActivity}
        />
      ))}
    </Box>
  );
}
