/* eslint-disable camelcase */
import {Fragment} from 'react';
import {IStats} from '../../types/index';
import {PokemonStatbar} from './PokemonStatbar';
import {useComponentId} from '../../util/index';
import {PokemonHeader} from '../index';

interface IPokemonStatsProps {
  colour: string;
  stats: IStats[];
}

export function PokemonStats({colour, stats}: IPokemonStatsProps): JSX.Element {
  const componentId = useComponentId();
  return (
    <>
      <PokemonHeader title="Stats" />
      <div className="mt-2.5 grid grid-cols-8">
        {stats.map(({base_stat, stat: {name}}: IStats) => {
          const stat = Math.min(base_stat, 100);

          return (
            <Fragment key={componentId + Math.random()}>
              <span className="col-span-3 font-semibold uppercase">
                {name.replace(/-/g, ' ')}
              </span>
              <div className="col-span-5">
                <PokemonStatbar colour={colour} base_stat={stat} />
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}