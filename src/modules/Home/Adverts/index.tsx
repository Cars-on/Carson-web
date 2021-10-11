import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import CardAd from '@/shared/components/molecules/CardAd';
import FilterSelected from '@/shared/components/molecules/FilterSelected';

import { Container, Content } from './styles';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import { api } from '@/shared/providers/api';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Adverts: React.FC = () => {
  const [announcementsPage, setAnnouncementsPage] = useState<number>(1);
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

  const old = {
    lowest_price: filtersValue.fromPriceFilter
      .replace('R$ ', '')
      .replace('.', '')
      .replace('.', '')
      .replace('.', ''),
    biggest_price: filtersValue.toPriceFilter
      .replace('R$ ', '')
      .replace('.', '')
      .replace('.', '')
      .replace('.', ''),
    lowest_year: filtersValue.fromYearFilter,
    biggest_year: filtersValue.toYearFilter,
    manufacturer: filtersValue.brandFilter,
  };

  const params = Object.keys(old)
    .filter(k => old[k] !== '')
    .reduce((a, k) => ({ ...a, [k]: old[k] }), {});

  async function getAnnouncementFiltered(page: number) {
    try {
      const response = await api.get(
        `/announcements-filter?per_page=8&page=${page + 1}`,
        { params },
      );

      setAnnouncements(response.data);
    } catch (error: any) {
      console.log(error?.response);
    }
  }

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

  const renderFilter =
    filtersValue.stateFilter ||
    filtersValue.colorFilter ||
    filtersValue.brandFilter ||
    filtersValue.fromYearFilter ||
    filtersValue.toYearFilter ||
    filtersValue.fromPriceFilter ||
    filtersValue.toPriceFilter;

  useEffect(() => {
    if (!!renderFilter) {
      getAnnouncementFiltered(announcementsPage);
    } else {
      handlePageChange(announcementsPage);
    }
  }, [announcementsPage, filtersValue]);

  return (
    <>
      {!!announcements && (
        <Container>
          {!!renderFilter && <FilterSelected />}
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
            onPageChange={({ selected }) => setAnnouncementsPage(selected)}
          />
        </Container>
      )}
    </>
  );
};

export default Adverts;
