import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

export default function Rozvrh() {
  const [table, setTable] = useState<string>("");
  const [isLoaded, setLoaded] = useState<boolean>(false);

  const load = async () => {
    const res = await fetch(
      "/sol-proxy/SOL/PublicWeb/spsmb/KWE009_RozvrhTridy.aspx",
      {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "cs,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
          "cache-control": "no-cache",
          "content-type": "application/x-www-form-urlencoded",
          pragma: "no-cache",
          priority: "u=0, i",
          "sec-ch-ua":
            '"Chromium";v="142", "Microsoft Edge";v="142", "Not_A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
        },
        referrer:
          "https://aplikace.skolaonline.cz/SOL/PublicWeb/spsmb/KWE009_RozvrhTridy.aspx",
        body: "__EVENTTARGET=&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=dNhKUShy1KhZJOQbWpWqF6W7voxSqqJhtEiTwwSvzp96N%2F7mpIBt%2Fep2aoa51T8ZkJTKKZqcpP8uKPis4LRPjyXwrb5Q3GHkWSc2AOxyIkiLmF%2FTK3SbNlcnQFKoLyR5xPyBwdvBgeAIyKykHDlRe2oR4nRA9%2FncXOEf%2BNkl7eQ5e4TwymFrwv5LOJnjyD2NtPMdhA9UGUeOu5XMwTSFtPgRBiDSTgwOfH8uYxhu%2B2Yph%2BYAHEkn5%2BLkKo2RStLZmtr5th3T%2FXML6tmJTSicwmCDNCGmMuwltugvPie4YBKtw6h%2BZ4wP9%2BUVpCr1w5jSdBASRMklN1SAei9g97kBQGT3DTH4suL5UslpgVfLZL3JxO7w4Wqhg3HwgxBJjYe6zW2fgVptf4G8pPrWqQnwOrW1p4Q6FWO4SHnnuREWjG4UEEtVNqGKT8iIaV0AMMp84iIIPq65PqiXNkQo%2FZkvmpbIU2LgIt4dS6RcKdvQmzF6eyYd3BXGEHozb6859Xg5qFYXjlXZpdsILuntvpaBZLkkMXnxq6WbCASoswgYcC6hk7ZSlErm1MyfZ3AwrUWXYMKp4ejmYpyxaANIpvo6l75u4kyaVFAwl2EflsEJBaybxfvNfACPjU%2FTVnOTcM80%2FLuDTb%2BjZl%2B8rVbSqavCRzZhQ6zYjlT%2BpXklM1OdEn9ELdJF%2BOfQdXhvVMoS2E4XpyktnCmPL3iM18USgERNff6TgPzFcnsBD%2BGc8iPrdFNoK87qo%2BMsslgq%2FxYsieXwdL6vvWvGpwTAwx4sIGI664jKedLMSkb%2BhGpUeeSbwojju0DwdM9TGyJ9mwngvdo892LfRGsGg9N4lwYbpIeQV3qYPUeEi8uyNnmuFGWwu46DEe5j730ij6cZQZjBDbC2TGaOCqwMmMKCWEpZ0XdECajONeK5FCzi14bYoBoMwl2YUPB7pI5APgjQ0yJRwgdAcezmh6auJC2%2F9HT7g5B2JoJ4kgwjZoThPCwzjr2plqUPQxNlUZ3JP3oJ%2FjjII9numeL%2F2U0lNi2Fz4VwJUXI%2Bn17R9otQTqyj1N2i6ZnWb5GdGa9bBmnqoxdVkHT2w5SV4attJi54tN1xGH6hIZ6jQKmGBoz5ZWjnJFq%2BtPZuHSZY33lVNJ7TgmAj%2F34rT7v0w77QIFBNGfzcUFTLeoYHkGIHAVwSGIiYOEKSSu5FZzsKcLbAcnPsQSbhNJqVft6gPQg0iN3yPYfecrHDhW5ZGyMgGT3tnCedS7rQ3OoagxjQLScVUZ9NDOiXKxvN%2FWpfiqj1ozYA%2B0NSW9kOFG9016StHEsY%2BjCNgU%2BAPe4GoozsrJOWqAZi5KLSFtFhGWt0ApHejfGXzHfAC%2FWs8EyNzlrNJA0uWYXcliq8OWjV4h2U4o0HDn413sfWfAILjUia28eadrJwOe504mCeeP68s89AQRZuZw90QRR8FU4npOctv6FG0Ksdw0oiuH1%2B54r95dHnxG3K9SmF8nA3Sem4h%2FcsQ6CfmUhVoGhvomoW3%2B8ulPoMxyG8KOsF9Nf0Tjb2IONIIeAE9IbavYe4MSwodU%2Bq1L8lBesMZxuwCf5xy3u6ExTsC41IyNqEQCM3Gh0iYYe%2Fdk6VoY4B%2BQzZvw%2B%2FKnL6X1cqqd6iNiKrs0eXMT4sFbLDwNlYmSba1dcmkWXsVaik80jl8aH7GChQ7SS8L9GT62qHCb0nivA8nM8DhrCKO%2BnhmnCedW6AX69AK50YCCHT0jRAp6L53AF3bBoppEr%2BBqhqZMDEkHt5pI4uJNlr5SVeY5mnpkGMZs5jKcxFHYHAFek0ti6OfyBN6XFqklaqTKj%2FLa89PemvDHh9utsA1pmNqAqsh3W6KRTUUFhfLY4PSFTfBk%2BklNvKneTp8QdD8ZibmsxYFvmXfHyYI6fmeJbxJ0u3vmzc2ebrbBenHmhrpJxFY7GEVc6a5OaT4GimrPO5qEYctMhBCVNlYuYE3gOUA7YtW0hKgsnbf6B6cSNxIh%2FnIAHkL5JYAQ1IgoJ%2F7X86oUNu0bAP3DWLej2gK7Z%2Fvh6x69JG%2FTYWSDi5cx7c41MbXWpu9fOug0%2FtYvEMrttSo0g7mSBLLvvgocBIsjhDNFYt2izDbQhsyhsqpD%2FCHyEFrAO%2BBkjn%2BoNFBLjVi1BDiyONRdRSZwOB0glpId5B8YvDTniTo8QhT0TsgRbRfGvxDFB1nSEVpKVlLq8nZdPZXVhZqqYimm%2FvxuXUg%2B1Q%2FcetynW1BtXS1Uc5hmVjWuskXtiHH8qA5pB7VKc2gGlGeSss%2B3QHzn9roG0Wu%2B5yGTIfwL7n6DyP1mjAXfU18O75CEn%2BAKaA8DcTQD6gKpR%2BlhNeWUKIzaW%2BQ0M3xP%2B&__VIEWSTATEGENERATOR=A8A3E96A&__EVENTVALIDATION=nW2LuoI9jfEz6f6lCXjmt3VtoAB5Iz7yeWZCYZGA69yYQaC5b16n3huF%2F7FXcI7zOcjhr96eQyJxWgxUP%2FUX0yyiHxYaMtv1CVXcSJazZjpVIeCHSgwza8ZUZWCb%2FfjDYZXl7%2BUP%2BpEGaQaTGrZBtLj9K6YudbDtotiqJ1HYiL3TZi3qZbKA2WjMK5kmU4gKSzKFT4vtnLrxBZ2NdMj8lKUydE2LbjP62dcho7m6qRUFj5iL3NEFIbdOyKlqRbf89QXLxKr8PcR77VkytOB7keu2fU%2BNhc3DcmWWLEPahX8rfhkvAqD8i1uvvsda%2B4lEFxVtKnqRY9T7By43lDOevDm3a6QJYGGs6YeTTBPiQNbf0JkMTLJwUmjfhnwVQThftBaQ%2Ba7%2FZXhl6KJR3hAUbTAHWOQjg9ZC7g7DysK%2BYFlLnoaToBmIeUsQfwKGUG35sV2UOGVghqNiKfHcqoYaBbcmt4l%2FQVQEN90pMGdpUHoI7VJ%2BaW0Eo5lugeVETWaTiyNhXESqX7mEke3xh6DpMe9lGZiBEiA6%2BdVCjegIdz7Q3c2OHKJDNyRmkofMeRzQztkFrw%3D%3D&calendarPart_kalendar=%253Cx%2520PostData%253D%25222025x11x2025x11x17%2522%253E%253C%2Fx%253E&calendarPart%24kalendar%24RBSelectionMode=Week&ctl10%24menuAccordion_AccordionExtender_ClientState=2&DDLTrida=D1525887&btnZobrazit=Zobrazit",
        method: "POST",
        mode: "cors",
        credentials: "include",
      }
    );
    if (!res.ok) return <p>Failed to load</p>;
    setLoaded(true);
    const html = await res.text();

    const dom = new DOMParser().parseFromString(html, "text/html");

    const tableDom = dom.getElementById("CCADynamicCalendarTable");
    //console.log(tableDom);
    if (!tableDom) return;
    tableDom
      .querySelectorAll("[onmouseover],[onmouseout],[onclick]")
      .forEach((el) => {
        el.removeAttribute("onmouseover");
        el.removeAttribute("onmouseout");
        el.removeAttribute("onclick");
      });

    setTable(tableDom.outerHTML);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      {isLoaded ? (
        <div
          className="
      w-full border-separate [&_table]:border-separate text-sm
      [&_td.DctInnerTableType10DataTD]:bg-neutral-800/25 
      [&_td.DctInnerTableType10DataTD,td.KuvSkolniAkceHodina,td.KuvOUOstatni,td.KuvOUKrouzek,td.KuvSuplujiciHodina,td.KuvSuplovanaHodina]:p-1
      [&_td.DctInnerTableType10DataTD,td.KuvSkolniAkceHodina,td.KuvOUOstatni,td.KuvOUKrouzek,td.KuvSuplujiciHodina,td.KuvSuplovanaHodina]:rounded-md 
      [&_td,th]:p-0.5 [&_td,th]:text-center 
      [&_table.DctInnerTableType10]:max-w-full! 
      [&_td,th]:border-neutral-800 
      [&_td,th]:bg-neutral-900 
      [&_td.KuvSkolniAkceHodina,td.KuvSkolniAkceHodina,td.KuvOUOstatni,td.KuvOUKrouzek]:text-gray-400 
      [&_td.DctInnerTableType10DataTD,th]:text-neutral-100 
      [&_.KuvSkolniAkceHodina]:bg-gray-900 
      [&_.KuvOUOstatni]:bg-gray-800 
      [&_.KuvOUKrouzek]:bg-gray-700 
      [&_td.KuvSuplujiciHodina]:bg-red-300/10
      [&_td.KuvSuplujiciHodina]:text-red-300
      [&_.KuvBunkaRozvrhNadpis]:block
      [&_span.KuvBunkaRozvrhNadpis]:font-bold
      [&_td.KuvSuplovanaHodina]:bg-neutral-800
      [&_td.KuvSuplovanaHodina]:text-neutral-600
      [&_th]:bg-[#1B1B1B]
      [&_th]:outline-1
      [&_th]:outline-[#1B1B1B]
      [&_td.KuvHeaderNadpis,td.KuvHeaderText]:bg-transparent
      "
          dangerouslySetInnerHTML={{ __html: table }}
        />
      ) : (
        <div className="flex min-h-screen justify-center items-center">
          <Spinner />
        </div>
      )}
    </>
  );
}
