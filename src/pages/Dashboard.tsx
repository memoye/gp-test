import { BookAIcon, PenIcon } from 'lucide-react';
import CourseAssignment from '../components/cards/course-assignment';
import { GroupCard } from '../components/cards/group-card';
import { SmallCard } from '../components/cards/small-card';
import { ProgressCard } from '../components/cards/progress-card';
import { TodoItemCard } from '../components/cards/todo-item-card';
import { useLayoutContext } from '../hooks/useLayoutContext';

const Dashboard = () => {
  const { profileOpen } = useLayoutContext();

  return (
    <main className="flex-1 py-10 lg:py-10">
      <h1
        className={`px-6 py-4 text-xl ${
          profileOpen ? '-top-18' : 'sticky top-16 lgr:top-0'
        } z-20 bg-white/80 font-bold text-foreground backdrop-blur-lg transition-[top] lg:text-3xl`}
      >
        Progress Dashboard
      </h1>

      <div className="grid gap-4 px-6 lg:grid-cols-4">
        <div className="col-span-2">
          <CourseAssignment />
        </div>
        <div className="_max-xs:col-span-2 h-full">
          <TodoItemCard
            color="red"
            title="Homework"
            description="For today's lesson"
            completed
            time="35 MIN AGO"
          />
        </div>

        <div className="_max-xs:col-span-2 h-full">
          <TodoItemCard
            color="blue"
            title="Reading"
            description="24 words per week"
            completed
            time="2H AGO"
          />
        </div>

        <div className="col-span-2">
          <GroupCard />
        </div>

        <div className="col-span-2">
          <ProgressCard />
        </div>

        <div className="col-span-2">
          <SmallCard
            icon={PenIcon}
            title="Grammer"
            subtitle="+30 grammer rules"
          />
        </div>

        <div className="col-span-2">
          <SmallCard
            icon={BookAIcon}
            title="Dictionary"
            subtitle="+10 new words"
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
