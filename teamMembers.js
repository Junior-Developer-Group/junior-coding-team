const Member = [
  {
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",
    name: "My Name 1",
    speciality: "Speciality",
  },
  {
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",
    name: "My Name 2",
    speciality: "Speciality",
  },
  {
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.",
    name: "My Name 3",
    speciality: "Speciality",
  },
];

const team_member = `
    <div class="swiper-slide">
        <div class="card">
            <div class="layer"></div>
                <div class="content">
                    <p>
                    ${Member[0].about}
                    </p>
                    <div class="imgBx">
                    <img src="./tm1.jpg" />
                    </div>
                    <div class="details">
                    <h2>${Member[0].name}<br /><span> ${Member[0].speciality} </span></h2>
                </div>
            </div>
        </div>
    </div>
`;

window.onload = function () {
  document.querySelector(".swiper-wrapper").innerHtml = team_member;
};
