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

  const renderFilter =
    filtersValue.stateFilter ||
    filtersValue.colorFilter ||
    filtersValue.brandFilter ||
    filtersValue.fromYearFilter ||
    filtersValue.toYearFilter ||
    filtersValue.fromPriceFilter ||
    filtersValue.toPriceFilter;

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

  async function getAnnouncement(page = 1) {
    console.log('chamou', page);

    try {
      const response = await api.get(`/announcements?per_page=8&page=${page}`);

      setAnnouncements(response.data);
    } catch (error: any) {
      console.log(error?.response);
    }
  }

  async function getAnnouncementFiltered(page = announcementsPage) {
    try {
      const response = await api.get(
        `/announcements-filter?per_page=8&page=${page}`,
        { params },
      );

      setAnnouncements(response.data);
    } catch (error: any) {
      console.log(error?.response);
    }
  }

  async function handlePageChange(page: number) {
    console.log(page, renderFilter);

    if (renderFilter) {
      getAnnouncementFiltered(page);
    } else {
      getAnnouncement(page);
    }
  }

  useEffect(() => {
    getAnnouncement();
  }, []);

  useEffect(() => {
    if (!!renderFilter) {
      getAnnouncementFiltered();
    } else {
      getAnnouncement();
    }
  }, [filtersValue]);

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
            onPageChange={({ selected }) => handlePageChange(selected + 1)}
          />
        </Container>
      )}
    </>
  );
};

export default Adverts;
