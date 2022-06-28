import http from "./http-common";
import qs from "qs";
import i18n from "i18next";

// Activity APIs
export default new (class ActivityService {
  // Get all activities
  async getActivity(pageSize) {
    return [
      {
        id: 1,
        attributes: {
          slug: "th-quantarium-an-interactive-quantum-computing-exhibition",
          title: "Quantarium: นิทรรศการคอมพิวเตอร์ควอนตัมเชิงโต้ตอบ",
          description:
            "โครงงานนี้ใช้ความรู้ด้านการออกแบบนิทรรศการเพื่อสร้างนิทรรศการเชิงโต้ตอบกับความรู้ด้านวิศวกรรมคอมพิวเตอร์ เพื่อแสดงแนวคิดเกี่ยวกับคอมพิวเตอร์ควอนตัมแก่เยาวชน เพื่อให้พวกเขาเข้าใจแนวคิดพื้นฐานของการคำนวณควอนตัมและวิธีการที่จะกลายเป็นเรื่องสำคัญในอนาคตอันใกล้",
          location_name: "มจธ.",
          location_url:
            "https://www.google.com/maps?q=kmutt&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiHnOvhncv4AhWfzTgGHaf3AZ4Q_AUoAnoECAIQBA",
          start_date: "2022-07-09",
          cover: {
            data: {
              id: 14,
              attributes: {
                url: "/uploads/1656250760312_26690ebacf.jpg",
              },
            },
          },
        },
      },
      {
        id: 2,
        attributes: {
          slug: "quantarium-event-th",
          title: "นิทรรศการควอนเทอเรียม 999",
          description:
            "โซลูชันที่สร้างสรรค์แต่สามารถอธิบายได้ของ Quantarium สร้างขึ้นจากพื้นฐานของ AI จริง ช่วยให้ตัดสินใจได้แม่นยำยิ่งขึ้น ครอบคลุมการประเมินมูลค่า การวิเคราะห์ โมเดลแนวโน้ม และการปรับพอร์ตให้เหมาะสม",
          location_name: "เซ็นทรัลบางมด",
          location_url:
            "https://www.google.com/maps?q=kmutt&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiHnOvhncv4AhWfzTgGHaf3AZ4Q_AUoAnoECAIQBA",
          start_date: "2022-06-26",
          cover: {
            data: {
              id: 15,
              attributes: {
                url: "/uploads/1656251837876_c3be14047e.jpg",
              },
            },
          },
        },
      },
    ];
    // const query = qs.stringify(
    //   {
    //     fields: [
    //       "slug",
    //       "title",
    //       "description",
    //       "location_name",
    //       "location_url",
    //       "start_date",
    //     ],
    //     populate: {
    //       cover: {
    //         fields: ["url"],
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
    //   .get("/activities?" + query)
    //   .then((response) => {
    //     return response.data.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  // Get activity by slug
  async getActivityBySlug(slug) {
    return {
      id: 1,
      attributes: {
        slug: "th-quantarium-an-interactive-quantum-computing-exhibition",
        title: "Quantarium: นิทรรศการคอมพิวเตอร์ควอนตัมเชิงโต้ตอบ",
        description:
          "โครงงานนี้ใช้ความรู้ด้านการออกแบบนิทรรศการเพื่อสร้างนิทรรศการเชิงโต้ตอบกับความรู้ด้านวิศวกรรมคอมพิวเตอร์ เพื่อแสดงแนวคิดเกี่ยวกับคอมพิวเตอร์ควอนตัมแก่เยาวชน เพื่อให้พวกเขาเข้าใจแนวคิดพื้นฐานของการคำนวณควอนตัมและวิธีการที่จะกลายเป็นเรื่องสำคัญในอนาคตอันใกล้",
        content:
          "<p>โครงงานนี้ใช้ความรู้ด้านการออกแบบนิทรรศการเพื่อสร้างนิทรรศการเชิงโต้ตอบกับความรู้ด้านวิศวกรรมคอมพิวเตอร์ เพื่อแสดงแนวคิดเกี่ยวกับคอมพิวเตอร์ควอนตัมแก่เยาวชน เพื่อให้พวกเขาเข้าใจแนวคิดพื้นฐานของการคำนวณควอนตัมและวิธีการที่จะกลายเป็นเรื่องสำคัญในอนาคตอันใกล้</p><p>&nbsp;</p><p>โครงงานนี้ใช้ความรู้ด้านการออกแบบนิทรรศการเพื่อสร้างนิทรรศการเชิงโต้ตอบกับความรู้ด้านวิศวกรรมคอมพิวเตอร์ เพื่อแสดงแนวคิดเกี่ยวกับคอมพิวเตอร์ควอนตัมแก่เยาวชน เพื่อให้พวกเขาเข้าใจแนวคิดพื้นฐานของการคำนวณควอนตัมและวิธีการที่จะกลายเป็นเรื่องสำคัญในอนาคตอันใกล้</p><p>&nbsp;</p><p>โครงงานนี้ใช้ความรู้ด้านการออกแบบนิทรรศการเพื่อสร้างนิทรรศการเชิงโต้ตอบกับความรู้ด้านวิศวกรรมคอมพิวเตอร์ เพื่อแสดงแนวคิดเกี่ยวกับคอมพิวเตอร์ควอนตัมแก่เยาวชน เพื่อให้พวกเขาเข้าใจแนวคิดพื้นฐานของการคำนวณควอนตัมและวิธีการที่จะกลายเป็นเรื่องสำคัญในอนาคตอันใกล้</p><p>&nbsp;</p><p>โครงงานนี้ใช้ความรู้ด้านการออกแบบนิทรรศการเพื่อสร้างนิทรรศการเชิงโต้ตอบกับความรู้ด้านวิศวกรรมคอมพิวเตอร์ เพื่อแสดงแนวคิดเกี่ยวกับคอมพิวเตอร์ควอนตัมแก่เยาวชน เพื่อให้พวกเขาเข้าใจแนวคิดพื้นฐานของการคำนวณควอนตัมและวิธีการที่จะกลายเป็นเรื่องสำคัญในอนาคตอันใกล้</p><p>&nbsp;</p><p>โครงงานนี้ใช้ความรู้ด้านการออกแบบนิทรรศการเพื่อสร้างนิทรรศการเชิงโต้ตอบกับความรู้ด้านวิศวกรรมคอมพิวเตอร์ เพื่อแสดงแนวคิดเกี่ยวกับคอมพิวเตอร์ควอนตัมแก่เยาวชน เพื่อให้พวกเขาเข้าใจแนวคิดพื้นฐานของการคำนวณควอนตัมและวิธีการที่จะกลายเป็นเรื่องสำคัญในอนาคตอันใกล้</p>",
        location_name: "มจธ.",
        location_url:
          "https://www.google.com/maps?q=kmutt&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiHnOvhncv4AhWfzTgGHaf3AZ4Q_AUoAnoECAIQBA",
        start_date: "2022-07-09",
        createdAt: "2022-06-26T13:41:39.446Z",
        updatedAt: "2022-06-26T13:52:20.583Z",
        publishedAt: "2022-06-26T13:43:56.897Z",
        locale: "th",
        cover: {
          data: {
            id: 14,
            attributes: {
              url: "/uploads/1656250760312_26690ebacf.jpg",
            },
          },
        },
        tags: {
          data: [
            {
              id: 9,
              attributes: {
                name: "TangibleLearningMaterial",
              },
            },
            {
              id: 10,
              attributes: {
                name: "LearningQuantum",
              },
            },
          ],
        },
        authors: {
          data: [
            {
              id: 17,
              attributes: {
                firstname: "ธานิก",
                lastname: "กิตติสุข",
              },
            },
            {
              id: 19,
              attributes: {
                firstname: "วิทธี",
                lastname: "ภูสิทธไสย",
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
    //       cover: {
    //         fields: ["url"],
    //       },
    //       tags: {
    //         fields: ["name"],
    //       },
    //       authors: {
    //         fields: ["firstname", "lastname"],
    //       },
    //     },
    //   },
    //   {
    //     encodeValuesOnly: true,
    //   }
    // );

    // return await http
    //   .get("/activities?" + query)
    //   .then((response) => {
    //     return response.data.data[0];
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
})();
