import { useQuery } from "@tanstack/react-query";
import { fetchMembers } from "../memberService";


function MembersPage() {
  const { data: members, isLoading, error } = useQuery({
    queryKey: ["members"],
    queryFn: fetchMembers,
  });

  if (isLoading) {
    return <div>Loading members...</div>;
  }

  if (error) {
    return <div>Error loading members: {error.message}</div>;
  }
  
  return (
    <div>
      <h1>Members</h1>
      <p>Welcome to the Member Enrollment App members page.</p>
       <ul>
        {members?.map((member) => (
          <li key={member.id}>
            {member.firstName} {member.lastName} - {member.plan} - {member.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MembersPage;
