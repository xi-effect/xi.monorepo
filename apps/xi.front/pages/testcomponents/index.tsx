import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { Link, LinkProps } from 'pkg.navigation.link';
import { Link as LinkIcon } from 'pkg.icons.link';
import { Arrow } from 'pkg.icons.arrow';
import { File, FileProps } from 'pkg.components.file';

const testLongAction = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('test long action');
      resolve('test long action');
    }, 5000);
  });

const testShortAction = () => {
  console.log('test short action');
};

export type TestLinksDataT = { data: LinkProps[]; comments: string; id: string };
const TestLinksData: TestLinksDataT[] = [
  {
    id: 'group1',
    data: [
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 'l',
        Icon: LinkIcon,
        isDisabled: true,
        hoverStyles: {
          color: 'grayscale.100',
        },
      },
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 'm',
        Icon: LinkIcon,
        isDisabled: true,
        hoverStyles: {
          color: 'grayscale.100',
        },
      },
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 's',
        Icon: LinkIcon,
        isDisabled: true,
        hoverStyles: {
          color: 'grayscale.100',
        },
      },
    ],
    comments: 'Disabled link:',
  },
  {
    id: 'group2',
    data: [
      {
        action: testShortAction,
        text: 'Ссылка',
        size: 'l',
        color: 'primary.main',
        Icon: LinkIcon,
        hoverStyles: {
          color: 'primary.dark',
        },
      },
      {
        action: testShortAction,
        text: 'Ссылка',
        size: 'm',
        color: 'primary.main',
        Icon: LinkIcon,
        hoverStyles: {
          color: 'primary.dark',
        },
      },
      {
        action: testShortAction,
        text: 'Ссылка',
        size: 's',
        color: 'primary.main',
        Icon: LinkIcon,
        hoverStyles: {
          color: 'primary.dark',
        },
      },
    ],
    comments: 'Ссылка с коротким действием:',
  },
  {
    id: 'group3',
    data: [
      {
        action: testLongAction,
        text: 'Ссылка',
        size: 'l',
        color: 'error.dark',
        Icon: Arrow,
        hideUnderline: true,
      },
      {
        action: testLongAction,
        text: 'Ссылка',
        size: 'm',
        color: 'error.dark',
        Icon: Arrow,
        hideUnderline: true,
      },
      {
        action: testLongAction,
        text: 'Ссылка',
        size: 's',
        color: 'error.dark',
        Icon: Arrow,
        hideUnderline: true,
      },
    ],
    comments: 'Ссылка с длинным действием и кастомной иконкой:',
  },
  {
    id: 'group4',
    data: [
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 'l',
        color: 'success.main',
        hideUnderline: true,
        hoverStyles: {
          color: 'success.dark',
        },
      },
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 'm',
        color: 'success.main',
        hideUnderline: true,
        hoverStyles: {
          color: 'success.dark',
        },
      },
      {
        action: 'https://github.com/',
        text: 'Ссылка',
        size: 's',
        color: 'success.main',
        hideUnderline: true,
        hoverStyles: {
          color: 'success.dark',
        },
      },
    ],
    comments: 'Обычная ссылка:',
  },
];

const TestFileData: FileProps = {
  name: 'Filename.jpg',
  size: 12000000,
  url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhUYGBgaGRoaGRoaHBkYGhoYHBoZGhoaGhocIS4lHB4rHxkaJjgmKy8xNjU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQxNDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD8QAAIBAgIGBggEBQUAAwAAAAECAAMRBCESMUFRYZEFInGBodEGEzJSkrHB4RRCYvBygqKy0hVDwuLxFiNT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAgICAgECBQUBAAAAAAAAAAECEQMhEjFBIlEEE0JhgTJxkaHxwf/aAAwDAQACEQMRAD8Awikg0tOsrOkmzTiQME4hCsYiFk8QMeS0ZG0dhQ9oxEmgkysLFQEiRIhSsiVjsVAyI1oQiNaOxUDtFJ2jWjsVA4rSdo1oyaIRpO0a0BURikrRrRioURWKKFk0DZLxQloo7FxRvhdkZqcumnImnOOz0uJQanBmnL7U5A047FRntTjFJfalB+rjsXEqKkmVhmSNaVYnErlJEpLRSQKRpkOJWKSBWWSkiUjsTRX0YxWGKSJWOyaBERiIQrG0Y7FQO0a0IRG0Y7FQO0a0IRGtGKgdopO0a0CSMUe0eMmjsSkiUk6FdX1eMMUnDZ6tFQ05ApLhpyJpwsXEp6EiyS6UkCkqxcSk1OQNOXTTkGSFicSkUkCkutTgykqyXEqFJBkls05FklJkuJTKSBSW2SQKSkyHErFJApLJSRZI7JcSvaRKw5SRKx2TQErGKwpWRIjsVAiIxEIRIkR2JoGRFCERoyaNN6gQ2LqNwOWdt/aJpYPFEre5Pj47ZkdJ9Hu2tbWHaecq4fGfhhqLMRmuoDgT46pyVa0ehy4vfR1WGxqMSpNmGw5HttK9XpimrlDqGttgM5D8Z6xy5urcM8uEu/6cWBN1K2vcHM89sfFLsSm5dHW4esji6MGHAwhScfSw4QaQcIVtmDmYqXpS6vZuuoy1AHtuIuDfQ+aX6jrikgySHR+OFVdLRKjjnDVa6LYM6gnVnI2XrsCyQK2OqWDTa+WYO/VCerEdhRSZJA05eanIMkakS4lBkkDTl1kgzTlKRLiUykgyS2wzkSkpSIcSmySBSXGpwZSUpEOJUKSBWWjTgXdQLkgRpkOIErIEQWJxyi4Wx47PvIUMRpa8jstKJCtHiVDtMeOxUdL0JjPWU1v13tYtvI3mUOlMG9a4VFA0t5J5zWwHQ/qidBiqNrUi4vvG0GZmI6LqU301qlQddz1QOOzsnEpK7R6Ti+NMp4X0f0b6YsbG1swDbK8HT6Aqo11OlsN9WcLiDTNRdCvd8ideibfqGXjNut09TS3XVr6xYi2/OxvKcpEKMf4ONrOaLOjghTqsMwd4MyqdLTcBQc9W8zv8Rg6VYNUDpaxOseN9UysBTQXdSoC69E3Ntp/eUuOTXRnLFb70VaWEqoVDaQGq5NhbaL7IbEhAcn6wAyfUBsmzi+lqTU2Ae7WsLWBJ2WB2zi8eAuRJ0r53vfxhG5PY51FaOxwr1wq31a75WtumnRxKP7LAnPLblrnndLFVAgT1rBT+W50e+bPQVViwQMDta2Td3ZlFKFKwhlt0dRiaiouk7AD59gjUagcBgCAdV8rzM6UwdUH1iWe2w5kZayITB40KC9ZtF7eyTqG4DYZFa0aXvZplINqczF9JsOW0buBv0cv/ACbCOGzGrYd4g012CcZdFGqi6pXxaOB1dgmsyCY2N6TTJRpdbaLfOVFtkySXZVw2OLmzIVO/Z46pcKTLwmAeo5Y3Cg5Xvn3yXS/SZonQSxNsycyCftL7dIy6Vsh0r0iKfUAOlbXsF9U596ruwGsyviKzO1ySTzMt4BzTYORqmqVIwcuTD1MC5toi+XjLWG6PZSGJtwmjhsajjMgNtvlCmxNpPJl8UVdGPLTJFDkLidRUV2UaJKEbTot9Zn45anssVrK1gVCG/bcNOjXDL7o5SQwy7FA7pwKR6bSOQf0XW4ekSpt7L5jkc4DpLoYtbTSxGWkqhR2nP92nZvgtLIs1uBK+I2Qn4VdueVs85XNk8I9UcEnQ1ZNSF1tci+vbYcpe6M6OQP6xUbRIOkHyK6+qRvvtnXLhlUWA1aoJcEoJI/NrvmI3NsFBI4jGdH0KFVHJLAdbRABtncC5yInO9KVVqVGc3F2JsbZcp6J0j0CrHTUXbaCxAI3ajObx/ouz6TKmgdIAKbnWbe1qmsMiXZjlxNqonNO6qmkB1iSANYUC23fAYKu6uGUm/DKdMnoc+Q01OeeuwA23i6Uwvq+qiaCAWJtmTbPrTX5sXpGPyJrb0ExHTNanTZeqWsNGoMrX2W2njOfd3qWUaTbSSS2Z1ky/h8ONBrIXsLj/AMlLDCoDpAlAN2UI0roJqTasHhXSm5010hqsDY37d06Po70gRieoVYmwN7rwHCc5iqLO17dp3kazD4kKqIAd5I1bgL8o2lLsiMpQuujuaFbTNtMHKzADaeMzOmFwyFfWE3UZIuvv3TlsHWd3CBmGkQt88rm1zaDq9HVmdlsSRck3FrDbe8hY0ntmjyuUdI2m9JVCEIpDXAXaAgG07T5wSYI4rSdbLwNyb2F8zMFUC2BB4mb3R+Mp0rNp1BkerogDPv8AGW1xXpIjJt+roF0d0M920hqJF93fH6RZKYKZ6XZYXmtS6SNYMiAuCLaRFmW+8C/OU8d6PPfqkHeTvkct+ovh6fSrOaaob3Es/wCquVCX269p4X3Qy9FawX1a7DK3aYzhFWyAsdpI+VptyTMeMkWqOOZk0QLEbct8UzTh322HfFFSFbPcAJIKJz6eky3IKEAfm00t2HrZGW6PT1Nk09NANRu1rHcTbXPL9S8Hr0a1oxWUMP0zSYhdIXOqxDX7xDv0jSUEs4FtesnLXkM4WLiHNON6uVqPStNxkSLmw0lZTyIuBxtLCYhDezA215jLtGzvhYUxFINkhvWLe1wdu/VxkhaFhRV9UBqEDWwiMLMoI3HOaJWRKQ5DMhejlDXCqo/TlstuganQ9E60HYNXfNs04NgOPIw5jo57E9AUyptcX2Lbfs3TnsX0LTpozVQ2iDZQDmTme4ap3zKN8g9AEWIBHHOXHK0RLHF+Dg+iWw2kAtN0YZZAkEEa2MPj6uhYImmGyBA619ZuNWrhOs/AIMgoA4ZQFbAIVK6gd2XjL+am7J+U1Gv+HE9HYVatYgro5EkNbS7uMbpXot3fRGSi9ic8hvtqm3V9H0VtJHZey9+eyYdToF9P27LvGRm0cibtMwliko01eyOGoJTW/WYgaR2C+wEiRw/SmILhiToe6Rkw3Xt4zTqYVNAJpNYDadsFUpqq2Vu4ZmPkn2Jwa6dAcZiSVs4RQdi8OM5t6pBsuXZNHFYd2OWQ4m5g0wVtbX7BNY0kYT5NkKVM6yp7zfwih9W2KOyaRrBdNQVCBvy5aJDXORYnSItwI7JJcMVuFdTfI6Sg9bXbRvc7M5mjFUT/ALifzED/ANliliEU9WpTPY6HwuflOVxa/wAO6M4v/R0pYhjpK5CrqIJAY8BlyMZsbXsdPTB0r+zYcwb24AQr9KIbBnRiLgddb23aohVU6tHtJv4xpPzETcfEhU67ltLqByNqt3Wz1yf4Bxp6dlYMGzOkADf2lFjfMZ8ZBMXoG4dLjVcX+hhKnSjupTTpgE3NrqSRvsLQqV6Wg5Rrb2FHQtUppq5swuxIdLjPM8Lb4JK9egtkxBC2BARiy557rA8I1StUYAF1Gy4tcjiQLwC4V2y0x3lpUU/qaIk19Kdm5hvSV/zM91U6rBWOzSFiQewjVNah6TpojSB0rdaxGvhv53nKp0XUP5kPa4v4yZ6HqD81PsDX8AJEseJ+So5Mq8Hb0el8OwHXVb52J0bEy5+KpkkaQuLX7xcduU4Cn0RU1lQbava8prYfCVTnognfpsDnOeeOEembwlKXaOip1gzWAK2yN8s+zV3w5y2nwnK1ui3Ot2TfovY/ePTwtRf96oQMj1hq1AXtlIcYvpmlyvaOkqVANZEoYjFKOMyvwtQ2/wDse24tr74VKWh7TMf4rGNRS82Um/aiOIxW4SjVqM2yadSqlsvkZRqVFG2axf2IkvuUamFJ3c5Tq4cg7e7V4S/Uq3ldix2TaLZzyUX0Z9fC5beZtKFfSQZDlnNaojSq6maxkc8omO1V4pfrCNNbMeLMDKKwg9KK80MQujJ0KjIboxU8NvaNR74ANHDQDaOiwPTqaqqfzJbxU/Q902qIpVRdHB3iwJHaMiJwoeSWoQbgkHeMjzEwlhTdxdHRD4lpVJJr+zvFwR2EfCR9YT8Kd55TjKXTFddVRu83+cOnTlU66jDkR35SVhl7ot/EQ9mdctO35j8Ikgh97wInLHpDEDMVCe5SPlLOG6eqKeuquNtgFbwyPKU8MkKPxUG/KOmRyvskjvMIuLba5/ffM+n0rh2F9PR4MCCPC3IyxRrU3yV0Y7tIX5a5hKCW5I6YTv8ATL+y4uLvqb5Sa1G96VjhD7vhHGFI2eEybxe6N0svlMseufVfxEiSd3jK5oPxkXLKLsbAbSbDmYJxfTQ/Uu0yVRGOo27zANQbefGUK/TdFf8Ac0juUE+NreMzqvpLn1aZI3s2j4AH5zZY5vo55Z8a7ZsuCNvhAPWO3Psy+s5vE9NVmORVRwAPi15ntiah1u/xHzmiwPyYS+Jj9KOqq1zKNbGoNbrzBnOu7N7TE9pJ+chaaLGkYyzNmy/SSDUSewecUxbRSuKI5yLQwye+3wf94/4RPeb4B/nLL0xq1nUe+26FZCLDK9v1ZHhog35SeTK4r2KBwo95vgA/5xfhTsvyt9ZphM7XtnuYG2V8iuQ7RElIEnWRffa+Ry1a+yHIOCKFPo521AS2nQVQ7h3GauDWxuV78rAbNvzmmiWGRB7Lar8TnIllaejWGCLVswafo25zLDuH3hP/AI0PfPIfUzpkTLPtyA+hkNHhnxykrLJ+TR4YrwYeH9Hbaqjgdi25GXk6AG12+FZoMSqliQija3VXmTKDekFHSsGZgLZgGxvuOUfOb6ZPysflBh6OIfzvyWY/TmHTDvSQOTpuA2kBklwGIttz8Jq//JqVr9bVsHAcf1LzmT0v0lRqFHCq1tH21a4IZiCNFhkc7/wiEZTb30E4YlG4pWdDh+i2UDQxNUC1xaxFtlgcpdp4aoNdZm7UX6ETFw3pBRRUQ6ZYBUyU20gAth35Qo9KKFr9e1r+y2qwbduIPfOacHJ7V/g7ISxpadflmvWo1GFhVK8QgJ/qJExsV6NaZu+IqOeIBt2DUO6WsD09RqErpFGBI0XGibj5zVkxTg9JJ/sVJRyLbtfucu/omn/6v8Kys3oyg/3H+ETrn1SlUAm0csvcwlgxrwcs/QCj87/CIBuhU99/hE6KssqVE/f72TVTl7mMsUV4MFuiFH52+GAfo5R+c/D95t4hOEo1F4EzSMmYyil4MxsGo/Ofh+8eHqpHl2Z0aa4MnRN1yzsTmTDvQOrRAGwFb8mW+yXCikC17333+dvCFp0lzy7cz5H5zjczuWNFVqRGzgABYd/WXnnIJhhbVc32ggDs0Tnzl40Ng2bbj7xIhvke3NVB7SQbmCkNwHoYcg6rDhpWt/MfrLL377jUDIq6oC1Ryo4tl2Cwz7BMXH+lapdaa6R945DuHmT2RKMpPQ3KMVs6F2AS7sFA2sfpvnP430lRNJaK6bAXLuLDWBkO/wAJzfSmKd2u7lvlygq/tv2H+4TWONLsylkb6D43HVKxDVHLZpYbBcEkAbM4bo7FIoAY2zTYTkGN9Q4yth8MWsSDbqkas7ZG+4a85qYfo9lzUspO6692RmjqqMrdlM4lNAjSz0ANR16GGHzRuQ3iOroypmckUHLaGc2+Wcv1MM5upZyDsOmQe0XjHBkqFOmVUZCzWA1ZdbIWitA02gWMxaGtTYXstXSPVYZaaHURfUDlIJiF0LZ30APZOv1CLu3rLD4Z2YMTUJGom9x2Em4hFw9Ta1Xmf8otUWm7MXEVAz1TsLVCO8taamF6bq0C1jpppgaLXsAQdR1iJujRY3D53v1bEE6yCSc/n4zPx1BkDXHVLjRbYwAYdx4HVE6ehptbO3wXT1GqzISUdSQQdWRtcGXHRjmMxwznnoF6lfsq/wDIy30H0nVpq5DFgoJ0WNxkCbZ9kzeOto1U29P7nW1VlZxx8ZXwHpJSq9V00G3jz7f/ACaNWiSLqwYcSPPXFtOmDaatGbVSZ9VBn+/nNDELYWOXOZzONhBPY30M1iYSKjL+8vpFJM3bFNDE6cUVbOzDjoW/4Z85J1Vdbr2aIv2EFgfCZFbHZXbQTuFz2AZzLxPTejcIM/eaxPcuod9+ycscUmd0s0UdNVxIWzM4C212VfhC5k9kwcd6RkMwQX2BmAJHZ33137JjVqjE3JJJFz5Sq82jjijnlkk0XFxD1CxdiT1dZvkSbynX1w+COTfy/MwNbXNF2ZvoLjDnLQwp0yzLdTew1Fu7dfXGfChgHa4XUAPaY8JfoJpG5vuGWobBri6RT2wuFwu0+AAt2DYJo0cENdz3gxsOo4/D95ep23+B85DZUUQ/CptA8ZL8Mg1ZcbRwRfNhbsN/nDLo7xyMksgtNdhHwkwbpx8CPC8OCu23L7wPr1OQU94IgMG1MEa/nM/FYdTky6aXzGYI15odjZ981yinYJXrUl4c4gObbCMjVWYdVlqaLDrA68iRqb6iA6L9ir/A39rTcq07BhchGUhgtidWRW5ybZKFHBimjm+mjqdBxlY2Isw3fIxt2n+ASpqvuZOBHW7j8jNCr0hUospRrXBuNmTEd3ymfgj1u4/Iyx0v+T+f+8ymk5qxJtQdHQYD0gSqujVAvxA19+R8Jafo1HUtTe/A3sO0WuO+84zCbT99omlhsSykaJK9ZshsttB1iTK4vQLjKO+w+IoOpzUgb7G3OKPhfSDS9u1+OR56j4RTTk/Yy4L3MCtWZrkk57dvOCdbG0JU29p+cG5zM0RnItVNQ/hH0gHhnOX8o+kBUFokU3oNhTk3d9YRsLfrMdEbrZ8B28NkjgSBcsLgW1557LcZYFRmN7WA9kbvvF5F4CoGJvfICy7LCaVAPsPjK+HruNnh9poU8S24eHlJZaDU2f8AZMsLUcb+ZkKWLb3EPw/UQ4xZOtFG3Wg+QkMtDJUfYPnJNUfX9DqifFMRYIndo/QRHEvq0E7v/IqKsdXe2o8suOoRqlQjPRft0R5SuXYknR7gQM+UiS/unmnlCgska52K3wDylSvUqEZC38ovzlkhr6v6l8oIqLHqm+rWvLVnHQWUPXuMnU9uiPG0ZKq9ZQ5CuCHFuFtIceMuGmdov8F5VOGXXojmsGrBNoo0+jtC1QHTpkZ2FmA2kjYRtEh02gBSzaQIYg8GN/rLtKsaRuM1PtLcZ8RuYSh00EurIOowJGwXvmOGeyCtyVjdKDoq4TU3Z9RNGmM1/jf5TOwgJDEZ9U5bdnlL6Nq/jb+2OfZEOjFijmKbGFBKus9p+cDCPrPaYOCCRd0gBfbkB+98mKIzLW4nYo3AbW3mRpKMmuRbbsAt85B3LH9I1ecVDbCIdLK9l2DzlqlTHvDmJUQcJZQX2kc4MSs0EpL7w5y3RQatPxmbSa20eMs03/hkMtGktMa9PxPlCrSFsn/qImelY/p8fOESqRqI5/eRRdl5aB9/+syPqWJ9v+ppXOKJ3c/+0da+8Dn/ANoDCigff/rbyj+obWHB/nJkQVYDNfA/8owS35+Q/wC0BiNJtf1IgyrnaOd/rCmmD+YfD/2kDS4j4PvGIEyv+yPOAq023fL6GFqJns+H7yu69nwxUKytVptB+tZBolQUvdhttw4w70xw5GValEcOUdJ9hya6JPhdD/7KWY3DaPOTIVl01NrNdhxK27tkBQqmmTldTrW3iIWvSHtoQAfaHvDz8pLTvZakq1/BiNrPaYom1ntMU6DmFUiSmTCUqZ1x2a+Q1fOAmItla+W3iZNDx+UZYVGMAsmh4/KHTtg0qHYIQMf3YSRhUMMl+H775GnXOxf7YdcUw/L/AGxMtNE0B/T4/wCUcX/T4/5SKVmuToHPZ1fOTFU+4f6fOTQ7RNVPDx/yhLHd/d/lK+kfcP8AR5yQqfoPJfOKh2EK/vP/ACiCfux84MVP0eA85L16gZoeQ84UFiI7eR84Jtevw+8T11P5D3gQbVU9w8vvHQWSZeJ5GDYcTy+8G9RfdPwmDLjd/SY6FZNl4mAZOP75RMw3f0tIFv3ZoBZBk/f7EWGupK36rDPt4cYmI3Hxg2I4+MGrVAnTsDisGy53uL6/OKTFYqc7sDsPgYo/UKkCqPfIaoypIqJISzMKqHfCIh/Y+8CL8ZNSd58IAWUot+x94RaLcOR85VWo3vN4SYqN7zch5QGXkpt+n4T5woptvXkfOUFrN7zcl8oRaz+83JZIzQFJ968m84RKLjap7b+czRiH95uQjjFPtY8oqHZqerb9Pj5xlR94PPlM9cY4/MeX3j/i397+k+cKHZoGm4NrjxkXpvw5kfSU/wDUX2t/SfOL/UW94fCfOKh2WfVvw5nykCj7gP5jz1QX+pNvX4T5yDY8/p+E+cKFYRkbcPiPlBlG3D4j/jI/jjvXkYvxh/TyMdCsTI24fEfKDZG3Dn9o7Ys7h4yBxR3DxjoLIlG3eP2kGU7vH7SZxR3CQOIvsH77oUKwbITs8Y8RrcBFACoBJC3GS9Wd/hHCHeOX3lEiAG8x7jf8vKOFPDl944Q8OUAHReJ8PKTC8T4Rgrbh4yZDbh4yRiA4nkI5y/N4CMuluHM+Uc6RysOZ8oDJC+/wisd/h94wVh+Ucz5RFz7o5nygA4vvHI+cRvvHI+cjpncOf2jl+A5/aADgHeOR84iSNo5HziUm2rxkH/hPMQGTLHePGD0zvHjF/KfDzjMR7p8POAiWkd4jFjw8YwI90+HnIWG4+HnARMk8P33SBJ4fvuitwPh5xrDcfDzgAtI8Of2jE9nOOQNxjEDjKAie7nFFluMUAHEkIooCFDxRQAdNslFFAYyaohriikgIud8gzmKKADkxKYopQEGkTFFABoxiigAxMYR4oCFGOqKKACEjFFABn1xRRQEf/9k=',
  icon: 'data:image/jpeg;base64,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',
  // hideCloseIcon: true,
};

const TestComponents = () => (
  <Stack sx={{ width: '100vw', height: '100vh', padding: '50px' }} spacing={4}>
    <Box sx={{ width: '100vw', height: '100vh', p: '50px' }}>
      <File {...TestFileData} />
    </Box>

    {TestLinksData.map((group: TestLinksDataT) => (
      <Stack spacing={1} key={group.id}>
        <Typography sx={{ textAlign: 'left' }}>{group.comments}</Typography>
        <Stack direction="row" spacing={2}>
          {group.data.map((data: LinkProps) => (
            <Link {...data} key={`${group.id}-${data.size}`} />
          ))}
        </Stack>
      </Stack>
    ))}
  </Stack>
);

export default TestComponents;
