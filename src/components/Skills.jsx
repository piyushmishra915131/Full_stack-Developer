function Skills({ skills = [] }) {
  const categories = ["Frontend", "Backend", "Tools"];

  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          My Skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
          }}
        >
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category
            );

            return (
              <div
                key={category}
                style={{
                  background: "#ffffff",
                  padding: "30px",
                  borderRadius: "18px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "25px",
                  }}
                >
                  {category}
                </h3>

                {categorySkills.map((skill) => (
                  <div
                    key={skill._id}
                    style={{
                      padding: "12px",
                      marginBottom: "12px",
                      background: "#f1f5f9",
                      borderRadius: "10px",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;