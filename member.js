function skillsMember() {
  const member = {
    name: 'John',
    age: 25,
    skills: ['JavaScript', 'React', 'Node'],
    // Method
    getSkills: function() {
      return this.skills;
    }
  };

  console.log(member.getSkills());
}