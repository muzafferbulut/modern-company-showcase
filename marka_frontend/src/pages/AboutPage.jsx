import React from "react";
import { TeamMemberService } from "../api/dataService";
import useFetch from "../hooks/useFetch";

const TeamMemberCard = ({ name, role, bio }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 text-center">
        <div className="card-body">
          <div
            className="icon-circle bg-light text-primary mx-auto mb-3"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              lineHeight: "80px",
            }}
          >
            <i className="bi bi-person-circle fs-2"></i>
          </div>
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text text-primary mb-2">{role}</p>
          {bio && <p className="card-text text-muted small">{bio}</p>}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const {
    data: teamMembers,
    loading,
    error,
  } = useFetch(TeamMemberService.getAllTeamMembers);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p>Ekip Yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return <div className="container py-5 text-danger">Hata: {error}</div>;
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4 display-4 text-center">Hakkımızda</h1>

      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <p className="lead text-center">
            Marka olarak, dijital dünyada işletmelerin
            potansiyellerini ortaya çıkarırken arada kendi kahvemizi de
            döküyoruz. Yazılım danışmanlığı veriyoruz ama bazen “neden böyle
            çalışıyor bu API?” diye biz de düşünüyoruz.
          </p>
          <p className="text-center">
            Amacımız, müşterilerimize sadece ölçeklenebilir çözümler sunmak
            değil, aynı zamanda commit mesajlarında iç huzur bulmalarına
            yardımcı olmaktır. Temiz kod prensiplerini benimsiyoruz — ama
            kimseye söz veremeyiz. Projelerinizi baştan sona titizlikle
            yönetiyoruz... genellikle kahve molasından sonra.
          </p>
        </div>
      </div>

      <h2 className="text-center mb-5 fw-bold">Ekibimiz</h2>
      <div className="row justify-content-center">
        {teamMembers && teamMembers.length > 0 ? (
          teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))
        ) : (
          <p className="text-center">Henüz ekip üyesi bulunmamaktadır.</p>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
