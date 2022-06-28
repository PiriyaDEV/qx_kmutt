import http from "./http-common";
import qs from "qs";
import i18n from "i18next";

// Member APIs
export default new (class MemberService {
  // Get all members
  async getMembers(pageSize) {
    return [
      {
        id: 1,
        attributes: {
          slug: "rajchawit-th",
          firstname: "ราชวิชช์",
          lastname: "สโรชวิกสิต",
          email: "rajchawit.sar@mail.kmutt.ac.th",
          profile_url: "rajchawit.com",
          role: "RESEARCHER",
          is_head_of_research_center: true,
          createdAt: "2022-06-26T12:53:09.329Z",
          updatedAt: "2022-06-26T12:59:49.849Z",
          publishedAt: "2022-06-26T12:58:14.775Z",
          locale: "th",
          profile_pic: {
            data: {
              id: 1,
              attributes: {
                url: "/uploads/Rajchawit_6c4af094ea.jpg",
              },
            },
          },
          interests: {
            data: [
              {
                id: 2,
                attributes: {
                  name: "Benchmark",
                },
              },
              {
                id: 1,
                attributes: {
                  name: "Quantum Programming",
                },
              },
              {
                id: 3,
                attributes: {
                  name: "QML",
                },
              },
            ],
          },
        },
      },
      {
        id: 3,
        attributes: {
          slug: "tanapat-th",
          firstname: "ธนภัทร์",
          lastname: "ดีสุวรรณ",
          email: "tanapat.deesuwan@gmail.com",
          profile_url: "Tanapat.com",
          role: "CURRENT_MEMBER",
          is_head_of_research_center: false,
          createdAt: "2022-06-26T13:01:49.484Z",
          updatedAt: "2022-06-26T13:09:06.623Z",
          publishedAt: "2022-06-26T13:07:13.456Z",
          locale: "th",
          profile_pic: {
            data: {
              id: 2,
              attributes: {
                url: "/uploads/Tanapat_dc08b7ac53.jpg",
              },
            },
          },
          interests: {
            data: [
              {
                id: 14,
                attributes: {
                  name: "Topological Physics",
                },
              },
              {
                id: 16,
                attributes: {
                  name: "High Energy & Particle Physics",
                },
              },
              {
                id: 20,
                attributes: {
                  name: "Atomic Physics",
                },
              },
              {
                id: 7,
                attributes: {
                  name: "Quantum Inequalities",
                },
              },
            ],
          },
        },
      },
      {
        id: 5,
        attributes: {
          slug: "jaturon-th",
          firstname: "จาตุรนต์",
          lastname: "หาญสมบูรณ์",
          email: "jaturon.harnsomburana@mail.kmutt.ac.th",
          profile_url: "Jaturon.com",
          role: "RESEARCHER",
          is_head_of_research_center: false,
          createdAt: "2022-06-26T13:10:47.857Z",
          updatedAt: "2022-06-26T13:52:35.275Z",
          publishedAt: "2022-06-26T13:10:48.966Z",
          locale: "th",
          profile_pic: {
            data: {
              id: 3,
              attributes: {
                url: "/uploads/Jaturon_bd039749b3.jpg",
              },
            },
          },
          interests: {
            data: [
              {
                id: 1,
                attributes: {
                  name: "Quantum Programming",
                },
              },
              {
                id: 4,
                attributes: {
                  name: "Quantum Computing",
                },
              },
              {
                id: 3,
                attributes: {
                  name: "QML",
                },
              },
            ],
          },
        },
      },
      {
        id: 7,
        attributes: {
          slug: "unchalisa-th",
          firstname: "อัญชลิสา",
          lastname: "แต้ตระกูล",
          email: "unchalisa.tae@mail.kmutt.ac.th",
          profile_url: "Unchalisa.com",
          role: "OLD_MEMBER",
          is_head_of_research_center: false,
          createdAt: "2022-06-26T13:13:15.373Z",
          updatedAt: "2022-06-26T13:13:50.418Z",
          publishedAt: "2022-06-26T13:13:16.263Z",
          locale: "th",
          profile_pic: {
            data: {
              id: 4,
              attributes: {
                url: "/uploads/Unchalisa_676cf50a6c.jpg",
              },
            },
          },
          interests: {
            data: [
              {
                id: 4,
                attributes: {
                  name: "Quantum Computing",
                },
              },
              {
                id: 3,
                attributes: {
                  name: "QML",
                },
              },
              {
                id: 2,
                attributes: {
                  name: "Benchmark",
                },
              },
            ],
          },
        },
      },
      {
        id: 9,
        attributes: {
          slug: "warat-th",
          firstname: "วรัตถ์",
          lastname: "พึ่งตำบล",
          email: "warat.pue@innosoft.kmutt.ac.th",
          profile_url: "Warat.com",
          role: "OLD_MEMBER",
          is_head_of_research_center: false,
          createdAt: "2022-06-26T13:17:01.190Z",
          updatedAt: "2022-06-26T13:17:51.813Z",
          publishedAt: "2022-06-26T13:17:03.470Z",
          locale: "th",
          profile_pic: {
            data: {
              id: 5,
              attributes: {
                url: "/uploads/Warat_f661badf79.jpg",
              },
            },
          },
          interests: {
            data: [
              {
                id: 6,
                attributes: {
                  name: "Quantum Teleportation",
                },
              },
              {
                id: 8,
                attributes: {
                  name: "Quantum Sensing",
                },
              },
              {
                id: 9,
                attributes: {
                  name: "Quantum Communication",
                },
              },
            ],
          },
        },
      },
      {
        id: 11,
        attributes: {
          slug: "prapong-th",
          firstname: "ประพงษ์",
          lastname: "ปรีชาประพาฬวงศ์",
          email: "prapong.pre@mail.kmutt.ac.th",
          profile_url: null,
          role: "RESEARCHER",
          is_head_of_research_center: false,
          createdAt: "2022-06-26T13:21:23.236Z",
          updatedAt: "2022-06-26T13:22:05.985Z",
          publishedAt: "2022-06-26T13:21:23.921Z",
          locale: "th",
          profile_pic: {
            data: {
              id: 6,
              attributes: {
                url: "/uploads/Prapong_e790a1d823.jfif",
              },
            },
          },
          interests: {
            data: [
              {
                id: 12,
                attributes: {
                  name: "Quantum Optics",
                },
              },
              {
                id: 6,
                attributes: {
                  name: "Quantum Teleportation",
                },
              },
            ],
          },
        },
      },
    ];
    // const query = qs.stringify(
    //   {
    //     populate: {
    //       profile_pic: {
    //         fields: ["url"],
    //       },
    //       interests: {
    //         fields: ["name"],
    //       },
    //     },
    //     locale: i18n.language,
    //     pagination: {
    //       page: 1,
    //       pageSize: pageSize,
    //     },
    //   },
    //   {
    //     encodeValuesOnly: true,
    //   }
    // );

    // return await http
    //   .get("/members?" + query)
    //   .then((response) => {
    //     return response.data.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  // Get member by slug
  async getMemberBySlug(slug) {
    return {
      id: 7,
      attributes: {
        slug: "unchalisa-th",
        firstname: "อัญชลิสา",
        lastname: "แต้ตระกูล",
        email: "unchalisa.tae@mail.kmutt.ac.th",
        profile_url: "Unchalisa.com",
        role: "OLD_MEMBER",
        is_head_of_research_center: false,
        createdAt: "2022-06-26T13:13:15.373Z",
        updatedAt: "2022-06-26T13:13:50.418Z",
        publishedAt: "2022-06-26T13:13:16.263Z",
        locale: "th",
        profile_pic: {
          data: {
            id: 4,
            attributes: {
              url: "/uploads/Unchalisa_676cf50a6c.jpg",
            },
          },
        },
        interests: {
          data: [
            {
              id: 4,
              attributes: {
                name: "Quantum Computing",
              },
            },
            {
              id: 3,
              attributes: {
                name: "QML",
              },
            },
            {
              id: 2,
              attributes: {
                name: "Benchmark",
              },
            },
          ],
        },
      },
    };
    // const query = qs.stringify(
    //   {
    //     filters: {
    //       slug: {
    //         $eq: slug,
    //       },
    //     },
    //     populate: {
    //       profile_pic: {
    //         fields: ["url"],
    //       },
    //       interests: {
    //         fields: ["name"],
    //       },
    //     },
    //   },
    //   {
    //     encodeValuesOnly: true,
    //   }
    // );

    // return await http
    //   .get("/members?" + query)
    //   .then((response) => {
    //     return response.data.data[0];
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
})();
