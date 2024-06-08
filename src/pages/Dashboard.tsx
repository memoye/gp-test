import { BookAIcon, PenIcon } from "lucide-react";
import CourseAssignment from "../components/cards/course-assignment";
import { GroupCard } from "../components/cards/group-card";
import { SmallCard } from "../components/cards/small-card";
import { ProgressCard } from "../components/cards/progress-card";
import { TodoItemCard } from "../components/cards/todo-item-card";

const Dashboard = () => {
  return (
    <>
      <main className="flex-1 lg:py-10 py-8 px-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
          Progress Dashboard
        </h1>
        <div>
          <CourseAssignment />
          <TodoItemCard
            color="red"
            title="Homework"
            description="For today's lesson"
            completed
            time="35 MIN AGO"
          />
          <TodoItemCard
            color="blue"
            title="Reading"
            description="24 words per week"
            completed
            time="2H AGO"
          />
          <GroupCard />
          <ProgressCard />
          <SmallCard
            icon={PenIcon}
            title="Grammer"
            subtitle="+30 grammer rules"
          />
          <SmallCard
            icon={BookAIcon}
            title="Dictionary"
            subtitle="+10 new words"
          />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
