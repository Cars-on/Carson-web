import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import CardAd from '@/shared/components/molecules/CardAd';
import FilterSelected from '@/shared/components/molecules/FilterSelected';

import { Container, Content } from './styles';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import { api } from '@/shared/providers/api';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Adverts: React.FC = () => {
  const [announcements, setAnnouncements] =
    useState<{ announcements: []; total_pages: number }>();

  const { filtersValue } = useSidebarFilter();

  useEffect(() => {
    async function getAnnouncement() {
      try {
        const response = await api.get(`/announcements?per_page=8&page=1}`);

        setAnnouncements(response.data);
      } catch (error: any) {
        console.log(error?.response);
      }
    }

    getAnnouncement();
  }, []);

  async function handlePageChange(page: number) {
    try {
      const response = await api.get(
        `/announcements?per_page=8&page=${page + 1}`,
      );

      setAnnouncements(response.data);
    } catch (error: any) {
      console.log(error?.response);
    }
  }

  return (
    <>
      {!!announcements && (
        <Container>
          {!!filtersValue.length && <FilterSelected />}
          <Content>
            {announcements?.announcements?.map((announcement: any) => (
              <CardAd announcement={announcement} />
            ))}
          </Content>

          <ReactPaginate
            pageCount={announcements.total_pages}
            pageRangeDisplayed={announcements.total_pages}
            marginPagesDisplayed={0}
            nextLabel={<IoIosArrowForward />}
            previousLabel={<IoIosArrowBack />}
            onPageChange={({ selected }) => handlePageChange(selected)}
          />
        </Container>
      )}
    </>
  );
};

export default Adverts;
