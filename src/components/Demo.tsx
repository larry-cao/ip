"use client";

import Image from 'next/image'
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import 'react18-json-view/src/dark.css'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

import React, { useState, useEffect, useRef } from 'react';


// import ip2location from "@/pages/api/ip2location";

const infos = [
  [
    {
      ip: "1.1.1.1",
      hostname: "one.one.one.one",
      anycast: true,
      city: "Los Angeles",
      region: "California",
      country: "US",
      loc: "34.0522,-118.2437",
      org: "AS13335 Cloudflare, Inc.",
      postal: "90076",
      timezone: "America/Los_Angeles"
    },
    {
      ip: "1.1.1.1",
      hostname: "one.one.one.one",
      anycast: true,
      city: "Los Angeles",
      region: "California",
      country: "US",
      loc: "34.0522,-118.2437",
      org: "AS13335 Cloudflare, Inc.",
      postal: "90076",
      timezone: "America/Los_Angeles"
    }
  ],
  [
    {
      ip: "1.1.1.1",
      hostname: "one.one.one.one",
      anycast: true,
      city: "Los Angeles",
      region: "California",
      country: "US",
      loc: "34.0522,-118.2437",
      org: "AS13335 Cloudflare, Inc.",
      postal: "90076",
      timezone: "America/Los_Angeles"
    },
    {
      ip: "1.1.1.1",
      hostname: "one.one.one.one",
      anycast: true,
      city: "Los Angeles",
      region: "California",
      country: "US",
      loc: "34.0522,-118.2437",
      org: "AS13335 Cloudflare, Inc.",
      postal: "90076",
      timezone: "America/Los_Angeles"
    }
  ],
  [
    {
      ip: "1.1.1.1",
      hostname: "one.one.one.one",
      anycast: true,
      city: "Los Angeles",
      region: "California",
      country: "US",
      loc: "34.0522,-118.2437",
      org: "AS13335 Cloudflare, Inc.",
      postal: "90076",
      timezone: "America/Los_Angeles"
    },
    {
      ip: "1.1.1.1",
      hostname: "one.one.one.one",
      anycast: true,
      city: "Los Angeles",
      region: "California",
      country: "US",
      loc: "34.0522,-118.2437",
      org: "AS13335 Cloudflare, Inc.",
      postal: "90076",
      timezone: "America/Los_Angeles"
    }
  ]
]

const testimonials = [
  [
    {
      content:
        'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
      author: {
        name: 'Sheryl Berge',
        role: 'CEO at Lynch LLC',
        image: avatarImage1,
      },
    },
    {
      content:
        'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        name: 'Leland Kiehn',
        role: 'Founder of Kiehn and Sons',
        image: avatarImage5,
      },
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        image: avatarImage3,
      },
    },
    {
      content:
        'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Demo() {
  // const [ip, setIp] = useState(null);
  const [searchKey, setSearchKey] = useState('1.1.1.1');
  const searchKeyRef = useRef(searchKey);
  searchKeyRef.current = searchKey;
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState({});
  const [data5, setData5] = useState({});
  const [data6, setData6] = useState({});

  const fetchData1 = async () => {
    const response = await fetch(`/api/ip2location?ip=${searchKeyRef.current}`);
    const json = await response.json();
    setData1(json);
  };
  const fetchData2 = async () => {
    const response = await fetch(`/api/ipapi?ip=${searchKeyRef.current}`);
    const json = await response.json();
    setData2(json);
  };
  const fetchData3 = async () => {
    const response = await fetch(`/api/ipdata?ip=${searchKeyRef.current}`);
    const json = await response.json();
    setData3(json);
  };
  const fetchData4 = async () => {
    const response = await fetch(`/api/iphub?ip=${searchKeyRef.current}`);
    const json = await response.json();
    setData4(json);
  };
  const fetchData5 = async () => {
    const response = await fetch(`/api/ipinfo?ip=${searchKeyRef.current}`);
    const json = await response.json();
    setData5(json);
  };
  const fetchData6 = async () => {
    const response = await fetch(`/api/ipqualityscore?ip=${searchKeyRef.current}`);
    const json = await response.json();
    setData6(json);
  };
  // useEffect(() => {
  //   fetchData1();
  // }, [searchKey]);

  const handleSearch = () => {
    // console.log(searchKeyRef.current);
    fetchData1();
    fetchData2();
    fetchData3();
    fetchData4();
    fetchData5();
    fetchData6();
  };

  useEffect(() => {
    (async () => {
      // 发起获取IP地址的请求
      await fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setSearchKey(data.ip);
        searchKeyRef.current = data.ip; // setState是异步的，所以这里需要使用useRef
      })
      .catch(error => console.error(error));

      handleSearch();
    })();
  }, []);

  useEffect(() => {
    searchKeyRef.current = searchKey;
  }, [searchKey]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value?.trim());
  };
  return (
    <section
      id="demo"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          {/* <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p> */}
          <div className="bg-white shadow sm:rounded-lg ">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Try Our Demo</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Try out the demo to get the information of an IP address.</p>
              </div>
              <form className="mt-5 sm:flex sm:items-center justify-center">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="ip" className="sr-only">
                    IP
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter an IP Address"
                    value={searchKey}
                    onChange={handleInputChange}
                    // onChange={event => setSearchKey(event.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSearch}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3 break-words"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white text-sm shadow-xl shadow-slate-900/10 p-6">
                  {data1 && (<JsonView src={data1} />)}
                  <div className="absolute right-6 bottom-6 font-display text-sm text-slate-500">
                    ip2proxy.com
                  </div>
                </figure>
              </li>
              <li>
                <figure className="relative rounded-2xl bg-white text-sm shadow-xl shadow-slate-900/10 p-6">
                  {data2 && (<JsonView src={data2} />)}
                  <div className="absolute right-6 bottom-6 font-display text-sm text-slate-500">
                    ip-api.com
                  </div>
                </figure>
              </li>
              <li>
                <figure className="relative rounded-2xl bg-white text-sm shadow-xl shadow-slate-900/10 p-6">
                  {data4 && (<JsonView src={data4} />)}
                  <div className="absolute right-6 bottom-6 font-display text-sm text-slate-500">
                    iphub.info
                  </div>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white text-sm shadow-xl shadow-slate-900/10 p-6">
                  {data3 && (<JsonView src={data3} />)}
                  <div className="absolute right-6 bottom-6 font-display text-sm text-slate-500">
                    ipdata.co
                  </div>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white text-sm shadow-xl shadow-slate-900/10 p-6">
                  {data5 && (<JsonView src={data5} />)}
                  <div className="absolute right-6 bottom-6 font-display text-sm text-slate-500">
                    ipinfo.io
                  </div>
                </figure>
              </li>
              <li>
                <figure className="relative rounded-2xl bg-white text-sm shadow-xl shadow-slate-900/10 p-6">
                  {data6 && (<JsonView src={data6} />)}
                  <div className="absolute right-6 bottom-6 font-display text-sm text-slate-500">
                    ipqualityscore.com
                  </div>
                </figure>
              </li>
            </ul>
          </li>
          {/* {infos.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((info, infoIndex) => (
                  <li key={infoIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    <JsonView src={info} />
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))} */}
        </ul>
      </Container>
    </section>
  )
}
