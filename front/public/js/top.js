document.addEventListener("DOMContentLoaded", async () => {
  if (!userId) return;
  $.ajax({
    url: "/top",
    method: "post",
    dataType: "json",
    data: JSON.stringify({ telegram_id: userId }),
    success: async function (data) {
      ratings = data;
      if (ratings.ok) {
        document.querySelector(".rating-card__place_long").innerHTML =
          nFormatter(ratings.result.user_position.place, 0);

        function colorBorder(id) {
          switch (id) {
            case 1:
              return "rating-card__place_first";
              break;
            case 2:
              return "rating-card__place_second";
              break;
            case 3:
              return "rating-card__place_third";
              break;
            default:
              return "";
              break;
          }
        }

        counter = 1;
        ratings.result.top_10.forEach((element) => {
          document.querySelector(".rating__list").innerHTML += `
                            <div class="rating-card" style="opacity: 1;"><span
                                    class="rating-card__place ${colorBorder(
                                      counter
                                    )} false">${element.place}</span><img
                                    src="${element.avatar_url}"
                                    alt="Felipekazuko" class="rating-card__avatar">
                                <div class="rating-card__info"><span class="rating-card__username">${
                                  element.first_name
                                }</span><span
                                        class="rating-card__level"></span></div>
                                <div class="rating-card__balance"><span class="rating-card__amount">${nFormatter(
                                  element.balance,
                                  1
                                )}</span><img
                                        src="public/img/coin.png"
                                        alt="" class="rating-card__coin-icon"></div>
                            </div>`;
          counter++;
        });
        document.querySelector(
          ".rating__list"
        ).innerHTML += `<div class="rating__list-paddinf">.</div>`;
      }
    },
  });
});
