import { PROJECT_ID } from "./timekit";
export const ENDPOINTS = {
  CREATE_SLOT_API: "http://heng.g42.ae/biogenix/api/slots/bulk",
  BOOK_POST_API:
    "https://api.timekit.io/v2/bookings?include=attributes,event,user",
  GET_API: `https://api.timekit.io/v2/bookings/groups?search=project.id:${PROJECT_ID}`,
  GRAPHQL_API:
    "https://api.timekit.io/v2/bookings?start_after=2020-11-15T06:16:00Z&start_before=2021-11-15T06:16:00Z&search=graph:group_customer%3Bstate:error&searchFields=graph:!%3D%3Bstate:!%3D&orderBy=event.start&sortedBy=asc&and=true&limit=20&page=1&include=attributes,customers,resource,widget,project,calendar",
  SINGLE_ID_DATA:
    "https://api.timekit.io/v2/bookings/43551dfc-9c04-4e94-b12d-942045f1ef03?include=attributes,customers,resource,widget,project,calendar,meta,available_actions,related_bookings.customers,related_bookings.available_actions,related_bookings.attributes",
};

// all data with "available_seats": 0,
// https://api.timekit.io/v2/bookings?search=graph:group_owner%3Bproject.id:80caa569-51cf-46c2-9b9a-ee22eaa60dad&include=attributes,calendar,resource

// https://api.timekit.io/v2/bookings/a9c3f9ba-1734-4a59-b8d5-a3a49cfd27c5?include=attributes,customers,resource,widget,project,calendar,meta,available_actions,related_bookings.customers,related_bookings.available_actions,related_bookings.attributes

// https://api.timekit.io/v2/bookings?start_after=2021-01-29T17:57:58Z&start_before=2022-01-29T17:57:58Z&search=graph:group_customer%3Bstate:error&searchFields=graph:\u0021%3D%3Bstate:\u0021%3D&orderBy=event.start&sortedBy=asc&and=true&limit=20&page=1&include=attributes,customers,resource,widget,project,calendar

// https://api.timekit.io/v2/bookings?start_after=2020-01-29T22:00:26Z&start_before=2021-01-29T22:00:26Z&sortedBy=desc&search=graph:group_customer%3Bstate:error&searchFields=graph:!%3D%3Bstate:!%3D&orderBy=event.start&and=true&limit=10&page=1&include=attributes,customers,resource,widget,project,calendar

// https://api.timekit.io/v2/bookings?start_after=2021-01-29T22%3A11%3A33Z&start_before=2022-01-29T22%3A11%3A33Z&search=graph%3Agroup_customer%3Bstate%3Aerror&searchFields=graph%3A%21%3D%3Bstate%3A%21%3D&orderBy=event.start&sortedBy=asc&and=true&limit=20&include=attributes%2Ccustomers%2Cresource%2Cwidget%2Cproject%2Ccalendar&page=2
// https://api.timekit.io/v2/bookings?search=graph:group_owner%3Bproject.id:f5f9320a-1749-4945-aced-bc211d936b4e&include=attributes,calendar,resource
// https://api.timekit.io/v2/bookings?search=graph:group_owner%3Bproject.id:f5f9320a-1749-4945-aced-bc211d936b4e&include=attributes,customers,resource,widget,project,calendar,meta,available_actions,related_bookings.customers,related_bookings.available_actions,related_bookings.attributes
// https://api.timekit.io/v2/bookings?start_after=2021-02-01T00%3A00%3A00Z&start_before=2021-02-01T23%3A00%3A00Z&search=graph:group_owner%3Bproject.id:f5f9320a-1749-4945-aced-bc211d936b4e&include=attributes

// Retrive booking
// https://api.timekit.io/v2/bookings/61ecb5f3-9607-4852-bf17-43f9c3444efd?include=attributes,customers,resource,widget,project,calendar,meta,available_actions,related_bookings.customers,related_bookings.available_actions,related_bookings.attributes
